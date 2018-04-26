import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import PrettyError from 'pretty-error';
import http from 'http';
import SocketIo from 'socket.io';
import mongoose from 'mongoose';
import cookie from 'cookie';
import config from '../src/config';
import actions from './actions';
import { mapUrl, parseToken } from './common/utils';

const pretty = new PrettyError();
const app = express();

const server = new http.Server(app);

const io = new SocketIo(server);
io.path('/ws');

const MongoStore = require('connect-mongo')(session);

app.use(session({
  secret: 'react and redux rule!!!!',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    url: 'mongodb://localhost/socialapp',
    touchAfter: 0.5 * 3600 // time period in seconds
  })
}));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/socialapp');

app.use(bodyParser.json());
app.use(cookieParser());

app.use(async (req, res) => {
  // Url template: /auth/login
  const splittedUrlPath = req.url.split('?')[0].split('/').slice(1);
  const { action, params } = mapUrl(actions, splittedUrlPath);

  if (action) {
    const token = cookie.parse(req.headers.cookie || '').accessToken;
    if (token) {
      req.session.user = parseToken(token).sub;
    }

    try {
      const result = await action(req, params);

      // if (result.isAnonymous) {
      //   // Just check Authorization when we need
      //   return res.end();
      // }

      if (result instanceof Function) {
        result(res);
      } else {
        res.json(result);
      }
    } catch (error) {
      if (error.redirect) {
        return res.redirect(error.redirect);
      }

      console.error('API ERROR:', pretty.render(error));
      res.status(error.status || 500).json(error);
    }
  } else {
    res.status(404).end('NOT FOUND');
  }
});

const bufferSize = 100;
const messageBuffer = new Array(bufferSize);
let messageIndex = 0;

if (config.apiPort) {
  const runnable = app.listen(config.apiPort, err => {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> 🌎  API is running on port %s', config.apiPort);
    console.info('==> 💻  Send requests to http://%s:%s', config.apiHost, config.apiPort);
  });

  io.on('connection', socket => {
    socket.emit('news', { msg: '\'Hello World!\' from server' });

    socket.on('history', () => {
      for (let index = 0; index < bufferSize; index += 1) {
        const msgNo = (messageIndex + index) % bufferSize;
        const msg = messageBuffer[msgNo];
        if (msg) {
          socket.emit('msg', msg);
        }
      }
    });

    socket.on('msg', data => {
      data.id = messageIndex;
      messageBuffer[messageIndex % bufferSize] = data;
      messageIndex += 1;
      io.emit('msg', data);
    });
  });

  io.listen(runnable);
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}

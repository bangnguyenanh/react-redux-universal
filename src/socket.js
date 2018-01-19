import io from 'socket.io-client';
import config from './config';

const host = clientUrl => (__SERVER__ ? `http://${config.apiHost}:${config.apiPort}` : clientUrl);

const socket = io('', { path: host('/ws'), autoConnect: false });

export const initSocket = () => {
  socket.on('news', data => {
    console.log(data);
    socket.emit('my other event', { my: 'data from client' });
  });

  socket.on('msg', data => {
    console.log(data);
  });

  return socket;
};

export default socket;

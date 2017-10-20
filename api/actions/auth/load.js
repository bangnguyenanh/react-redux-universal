import { parseToken } from '../../common/utils';

export default function load(req) {
  return new Promise((resolve, reject) => {
    if (req.cookies && req.cookies.access_token) {
      let payload = {};
      try {
        payload = parseToken(req.cookies.access_token);
      } catch (e) {
        res.clearCookie("access_token");
        reject("Cookie is not valid");
      }
      if (Math.round(new Date().getTime() / 1000) < payload.exp) {
        resolve(payload.sub);
      } else {
        res.clearCookie("access_token");
        reject("Cookie expired!");
      }
    } else {
      resolve(null);
    }
  })
}

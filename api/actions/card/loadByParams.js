import { Card } from 'models';

export default function loadByParams(req) {
  return new Promise((resolve, reject) => {
    if (!req.session.user) {
      reject('Can not access');
    }

    Card.
      find({
        createdBy: req.session.user.id
      }).
      //limit(10).
      sort({ createdDate: -1 }).
      select({ _id: 1, name: 1, description: 1, pageUrl: 1 }).
      exec(function (err, cards) {
        if (err) {
          reject(err.message);
        }

        resolve(cards);
      });
  });
}
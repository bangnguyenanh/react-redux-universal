import { Spend } from 'models';

export default function loadList(req) {
  return new Promise((resolve, reject) => {
    if (!req.session.user) {
      reject(new Error('Can not access'));
    }

    Spend.find({
      // createdBy: req.session.user.id
    })
      .sort({ createdDate: -1 })
      .exec((err, spends) => {
        if (err) reject(new Error(err.message));
        resolve({ spends });
      });
  });
}

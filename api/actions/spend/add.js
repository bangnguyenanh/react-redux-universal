import { Spend } from 'models';

export default function add(req) {
  return new Promise((resolve, reject) => {
    if (!req.session.user) {
      reject(new Error('Can not access'));
    }

    const newSpend = new Spend({
      amount: req.body.money,
      category: req.body.category,
      description: req.body.description,
      createdBy: req.session.user.id
    });

    newSpend.save((err, spend) => {
      if (err) {
        reject(new Error(err.message));
      }

      resolve({
        spend
      });
    });
  });
}

import { Spend } from 'models';

export default function add(req) {
  return new Promise((resolve, reject) => {
    const newSpend = new Spend({
      amount: req.body.money,
      category: req.body.category
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

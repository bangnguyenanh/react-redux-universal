import { Card } from 'models';

export default function insert(req) {
  return new Promise((resolve, reject) => {
    if (!req.session.user) {
      reject(new Error('Can not access'));
    }

    const newCard = new Card({
      name: req.body.name,
      createdBy: req.session.user._id,
      description: req.body.description,
      pageUrl: req.body.pageUrl
    });

    newCard.save((err, card) => {
      if (err) {
        reject(err.message);
      }

      resolve({
        insertedCard: card
      });
    });
  });
}

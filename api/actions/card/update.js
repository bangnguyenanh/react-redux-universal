import { Card } from 'models';

export default function update(req) {
  return new Promise((resolve, reject) => {
    Card.findOne({ _id: req.body._id }, (err, existingCard) => {
      if (!existingCard) {
        reject({ message: 'Not found!' });
      }

      existingCard.name = req.body.name;
      existingCard.description = req.body.description;
      existingCard.modifiedDate = Date.now();

      existingCard.save((err, card) => {
        if (err) {
          reject(err.message);
        }

        resolve(card);
      })
    })
  })
}
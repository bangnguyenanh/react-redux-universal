import { Category } from 'models';

export default function update(req) {
  return new Promise((resolve) => {
    Category.findOne({ _id: req.body._id }, (err, existedObj) => {
      if (!existedObj) {
        reject({ message: 'Not found!' });
      }

      existedObj.name = req.body.name;
      existedObj.imageUrl = req.body.imageUrl;
      existedObj.description = req.body.description;
      existedObj.modifiedDate = Date.now();

      existedObj.save((err, savedObj) => {
        if (err) {
          reject(err.message);
        }

        resolve(savedObj);
      })
    })
  });
}

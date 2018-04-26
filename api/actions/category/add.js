import { Category } from 'models';

export default function add(req) {
  return new Promise((resolve, reject) => {
    const newCategory = new Category({
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      description: req.body.description,
    })

    newCategory.save((err, savedObj) => {
      if (err) {
        reject(err.message);
      }

      resolve(res => {
        res.json(savedObj);
      });
    })
  })
}

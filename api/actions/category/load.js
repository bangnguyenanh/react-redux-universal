import { Category } from 'models';

export default function load(req) {
  return new Promise((resolve, reject) => {

    const { pageIndex = 0, pageSize = 20 } = req.query;

    Category.find({}).count((countErr, count) => {
      if (countErr)
        reject(new Error(countErr.message));

      Category.find({})
        .limit(+pageSize)
        .skip(+pageIndex * +pageSize)
        .sort({ createdDate: -1 })
        .select({
          _id: 1,
          name: 1,
          imageUrl: 1,
          description: 1,
        })
        .exec((err, items) => {
          if (err)
            reject(err.message);

          resolve({
            items,
            currentPage: +pageIndex,
            totalPages: Math.ceil(count / pageSize)
          });
        });
    });
  });
}

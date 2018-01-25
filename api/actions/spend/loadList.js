import { Spend } from 'models';

export default function loadList(req) {
  return new Promise((resolve, reject) => {
    if (!req.session.user) {
      reject(new Error('Can not access'));
    }

    const { pageIndex, pageSize } = req.query;

    Spend.find({
      createdBy: req.session.user.id
    }).count((countErr, count) => {
      if (countErr) reject(new Error(countErr.message));

      Spend.find({
        createdBy: req.session.user.id
      }).limit(+pageSize)
        .skip(+pageIndex * +pageSize)
        .sort({ createdDate: -1 })
        .exec((queryErr, spends) => {
          if (queryErr) reject(new Error(queryErr.message));

          resolve({
            spends: {
              items: spends,
              currentPage: +pageIndex,
              totalPages: Math.ceil(count / pageSize)
            }
          });
        });
    });
  });
}

import { Category } from 'models';

export default function remove(req) {
    return new Promise((resolve, reject) => {
        Category.remove({ _id: req.body.id }, (err) => {
            if (err) {
                reject(err.message);
            }

            resolve(res => {
                res.json({
                    id: req.body.id,
                    message: "removed",
                });
            });
        })
    })
}
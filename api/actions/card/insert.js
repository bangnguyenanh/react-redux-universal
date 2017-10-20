import { Card, User } from 'models';

export default function insert(req) {
    return new Promise((resolve, reject) => {
        if (!req.session.user) {
            reject('Can not access');
        }

        User.findOne({ _id: req.session.user.id }, (err, user) => {
            if (!user) {
                reject({ message: 'Not found!' });
            }

            let newCard = new Card({
                name: req.body.name,
                createdBy: user._id,
                description: req.body.description,
                pageUrl: req.body.pageUrl
            })

            newCard.save((err, card) => {
                if (err) {
                    reject(err.message);
                }

                resolve({
                    insertedCard: card
                });
            })
        })
    })
}
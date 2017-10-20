import { User } from 'models';
import { createToken } from '../../common/utils';
import { sessionExpiredTime } from '../../common/config';

export default function register(req) {
    return new Promise((resolve, reject) => {
        let newUser = new User({
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password
        })

        newUser.save((err, user) => {
            if (err) {
                reject(err.message);
            }

            resolve(res => {
                res.cookie('access_token', createToken(user), { maxAge: sessionExpiredTime });
                res.json({
                    fullName: user.fullName,
                    email: user.email
                });
            });
        })
    })
}
import { User } from 'models';
import { createToken } from '../../common/utils';
import { sessionExpiredTime } from '../../common/config';

export default function login(req) {
    return new Promise((resolve, reject) => {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (!user) {
                reject({ message: 'Not found!' });
            }

            user.comparePassword(req.body.password, (err, isMatch) => {
                if (!isMatch) {
                    reject({ message: 'Wrong email and/or password' });
                }

                const accessToken = createToken(user);

                if (req.body.source === 'CHROME_EXTENSION') {
                    resolve(res => {
                        res.json({
                            accessToken: accessToken,
                            fullName: user.fullName,
                            email: user.email
                        });
                    });
                } else if (req.body.source === 'webapp') {
                    resolve(res => {
                        res.cookie('access_token', accessToken, { maxAge: sessionExpiredTime });
                        res.json({
                            fullName: user.fullName,
                            email: user.email
                        });
                    });
                } else {
                    reject({ message: 'undefined source' });
                }
            });
        });
    });
}
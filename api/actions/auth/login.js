import { User } from 'models';
import { createToken } from '../../common/utils';
import { sessionExpiredTime } from '../../common/config';

export default function login(req) {
    return new Promise((resolve, reject) => {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (err) {
                reject({ message: 'Something went wrong!' });
                return;
            }

            if (!user) {
                reject({ message: 'Not found!' });
                return;
            }

            user.comparePassword(req.body.password, (err, isMatch) => {
                if (!isMatch) {
                    reject({ message: 'Wrong email and/or password' });
                    return;
                }

                const accessToken = createToken(user);

                if (req.body.source === 'CHROME_EXTENSION') {
                    resolve({
                        accessToken: accessToken,
                        fullName: user.fullName,
                        email: user.email
                    });
                } else if (req.body.source === 'webapp') {
                    resolve({
                        user: {
                            fullName: user.fullName,
                            email: user.email
                        },
                        accessToken: accessToken
                    });
                } else {
                    reject({ message: 'undefined source' });
                }
            });
        });
    });
}
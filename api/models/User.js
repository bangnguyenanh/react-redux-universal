import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const schema = new Schema({
    fullName: { type: 'String', required: true },
    email: { type: 'String', required: true },
    password: { type: 'String', required: true },
    createdDate: { type: 'Date', default: Date.now, required: true },
    modifiedDate: { type: 'Date', default: Date.now, required: true }
});

schema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) {
        return next();
    };

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash;
            next();
        });
    });

});

schema.methods.comparePassword = function (password, done) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        done(err, isMatch);
    });
};

export default mongoose.model('User', schema);
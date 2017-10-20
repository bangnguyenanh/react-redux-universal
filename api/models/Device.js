import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
  registrationId: { type: 'String', required: true },
  active: { type: 'Boolean', default: true, required: true },
  createdDate: { type: 'Date', default: Date.now, required: true },
  modifiedDate: { type: 'Date', default: Date.now, required: true }
});

export default mongoose.model('Device', schema);
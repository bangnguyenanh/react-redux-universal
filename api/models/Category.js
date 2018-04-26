import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  name: { type: 'String', required: true },
  imageUrl: { type: 'String', required: true },
  description: { type: 'String' },
  // createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  createdDate: { type: 'Date', default: Date.now, required: true },
  modifiedDate: { type: 'Date', default: Date.now, required: true }
});

export default mongoose.model('Category', schema);

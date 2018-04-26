import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  name: { type: 'String', required: true },
  imageUrl: { type: 'String', required: true },
  description: { type: 'String' },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  createdDate: { type: 'Date', default: Date.now, required: true },
  modifiedDate: { type: 'Date', default: Date.now, required: true }
});

export default mongoose.model('Item', schema);

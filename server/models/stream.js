import mongoose from 'mongoose';

const streamSchema = mongoose.Schema({
  title: String,
  description: String,
  userId: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Stream = mongoose.model('Stream', streamSchema);

export default Stream;

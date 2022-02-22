import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    provider: {
      type: String,
      required: true,
      enum: ['google', 'github'],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema);
export default User;

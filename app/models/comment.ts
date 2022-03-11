import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const Comment =
  mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
export default Comment;

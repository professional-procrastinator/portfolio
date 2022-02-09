import mongoose, { Schema } from "mongoose";

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
    password: {
      type: String,
      required: false,
    },
    picture: {
      type: String,
      default: `https://picsum.photos/seed/${
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
      }/72/72`,
      required: false,
    },
    method: {
      type: String,
      required: true,
      enum: ["password", "google"],
    },
    theme: {
      type: String,
      required: false,
      default: "light",
      enum: ["light", "dark"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;

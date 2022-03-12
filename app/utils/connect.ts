import mongoose from 'mongoose';
export const connectDB = async () => {
  if (mongoose.connection.readyState == 1) return;
  const conn = await mongoose.connect(process.env.MONGODB_URI!);

  console.log(
    '\x1b[33m%s\x1b[0m',
    `MongoDB Connected: ${conn.connection.host}`
  );
};

import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connection.readyState == 1) return;
  const conn = await mongoose.connect(process.env.MONGODB_URI!);

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectDB;

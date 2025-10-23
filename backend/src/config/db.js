import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("Connect to database successfully");
  } catch (error) {
    console.error("Failed when connect to database:", error);
    process.exit(1);
  }
};

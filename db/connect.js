import mongoose from "mongoose";


export const connectDB = (db_url) => {
  console.log("connected DB");
  return mongoose.connect(db_url);
};

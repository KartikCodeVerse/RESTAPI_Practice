import { config } from "dotenv";

import { connectDB } from "./db/connect.js";
import Product from "./models/product.js";
import productJson from "./products.json" assert { type: "json" };
config();

const start = async () => {
  try {
    await connectDB(process.env.DB_URL);
    await Product.deleteMany()
    await Product.create(productJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();

import express from "express";
const app = express();
import products_routes from "./routes/products.js";
import { connectDB } from "./db/connect.js";
import { config } from "dotenv";
config();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("I am Live...");
});

app.use("/api/products", products_routes);

app.listen(port, async () => {
  try {
    await connectDB(process.env.DB_URL);
    console.log(`Server is running on port 8080`);
  } catch (error) {
    console.log(error);
  }
});

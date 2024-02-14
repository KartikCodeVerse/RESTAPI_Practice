import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  featured: {
    type: Boolean,
    default: false,
  },
  RTCDataChannel: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "dell", "mi", "iphone"],
      message: `{VALUE} is not supported`,
    },
  },
});

export default mongoose.model("Product", productSchema);

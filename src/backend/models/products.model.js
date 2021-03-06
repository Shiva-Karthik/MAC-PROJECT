const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    details: [{ type: String, required: true }],
    type: { type: String },
  },
  {
    versionKey: false,
  }
);

const Product  = mongoose.model("product", productSchema);
module.exports = Product;

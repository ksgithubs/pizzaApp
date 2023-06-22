const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productPic: String,
  productName: String,
  category: String,
  mrp: Number,
  creationDate: String,
  expiryDate: String, 
});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;

const db = require("../config/db");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsSchema = new Schema(
  {
    name: String,
    price: String,
    country: String,
  },
  { timestamps: true }
);

const Products = db.model("product", productsSchema);

module.exports = Products;

const Products = require("../models/Products");

const getAllProducts = async (req, res, next) => {
  try {
    const result = await Products.find();

    res.json({
      msg: "berikut data products",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const result = new Products(req.body);
    result.save;

    res.json({
      msg: "berhasil membuat data",
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const getProductbyId = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};

module.exports = { getAllProducts, createProduct };

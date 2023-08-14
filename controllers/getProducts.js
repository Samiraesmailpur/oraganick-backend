const { Product } = require("../models/productModel");
const { HttpError } = require("../helpers");

const getProducts = async (req, res) => {
  const products = await Product.find({});
  if (!products) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(products);
};

const getProductsById = async (req, res) => {
  const { productId } = req.params;
  const products = await Product.findOne({ _id: productId });

  if (!products) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(products);
};

module.exports = {
  getProducts,
  getProductsById,
};

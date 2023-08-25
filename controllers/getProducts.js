const { Product } = require("../models/product");
const { HttpError } = require("../helpers");

const getProducts = async (req, res) => {
  const products = await Product.find({});
  const sortedProducts = products.sort((a, b) => {
    if (a.discount && !b.discount) {
      return -1;
    } else if (!a.discount && b.discount) {
      return 1;
    } else {
      return 0;
    }
  });
  if (!sortedProducts) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(sortedProducts);
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

const { Order } = require("../models/order");

const addOrder = async (req, res) => {
  const result = await Order.create({ ...req.body });
  res.status(201).json(result);
};

module.exports = {
  addOrder,
};

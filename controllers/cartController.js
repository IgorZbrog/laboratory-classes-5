const Product = require("../models/Product");
const Cart = require("../models/Cart");
const { STATUS_CODE } = require("../constants/statusCode");

exports.addProductToCart = (req, res) => {
  const { name } = req.body; 
  const product = Product.findByName(name);

  if (!product) {
    return res.status(STATUS_CODE.NOT_FOUND).redirect("/products/new");
  }

  Cart.add(name); 
  res.status(STATUS_CODE.FOUND).redirect("/products/new"); 
};

exports.getProductsCount = (req, res) => {
  const count = Cart.getProductsQuantity();
  res.json({ count });
};
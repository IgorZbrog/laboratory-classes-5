const Product = require("../models/Product");
const Cart = require("../models/Cart"); 
const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");

exports.getProductsView = (request, response) => {
  const products = Product.getAll();
  response.render("products.ejs", {
    headTitle: "Shop - Products",
    products,
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products",
    cartCount: Cart.getProductsQuantity() 
  });
};

exports.getAddProductView = (request, response) => {
  response.render("add-product.ejs", {
    headTitle: "Shop - Add product",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/add",
    cartCount: Cart.getProductsQuantity() 
  });
};

exports.getNewProductView = (request, response) => {
  const newestProduct = Product.getLast();
  response.render("new-product.ejs", {
    headTitle: "Shop - New product",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/new",
    newestProduct,
    cartCount: Cart.getProductsQuantity() 
  });
};

exports.getProductView = (request, response) => {
  const name = request.params.name;
  const product = Product.findByName(name);
  response.render("product.ejs", {
    headTitle: "Shop - Product",
    menuLinks: MENU_LINKS,
    activeLinkPath: `/products/${name}`,
    product,
    cartCount: Cart.getProductsQuantity() 
  });
};


exports.deleteProduct = (request, response) => {
  const name = request.params.name;
  Product.deleteByName(name);
  response.status(STATUS_CODE.OK).json({ success: true });
};
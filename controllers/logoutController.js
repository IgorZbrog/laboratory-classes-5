const { LOGOUT_LINKS } = require("../constants/navigation");
const logger = require("../utils/logger");
const Cart = require("../models/Cart"); // Dodany import

exports.getLogoutView = (request, response) => {
  response.render("logout.ejs", {
    headTitle: "Shop - Logout",
    path: "/logout",
    activeLinkPath: "/logout",
    menuLinks: LOGOUT_LINKS,
    cartCount: Cart.getProductsQuantity() // Dodane
  });
};

// Metoda killApplication pozostaje BEZ ZMIAN (nie renderuje widoku)
exports.killApplication = (request, response) => {
  logger.getProcessLog();
  process.exit();
};
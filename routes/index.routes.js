const express = require("express");
const router = express.Router();

const clientRoutes = require("./client.routes");
const orderRoutes = require("./order.routes");
const currencyRoutes = require("./currency_type.routes");

router.use("/clients", clientRoutes);
router.use("/orders", orderRoutes);
router.use("/currencies", currencyRoutes);

module.exports = router;



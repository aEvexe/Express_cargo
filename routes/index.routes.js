const express = require("express");
const router = express.Router();

const clientRoutes = require("./client.routes");
const orderRoutes = require("./order.routes");
const currencyRoutes = require("./currency_type.routes");
const operationRoutes = require("./operation.routes");
const adminRoutes = require("./admin.routes");
const statusRoutes = require("./status.routes");

router.use("/clients", clientRoutes);
router.use("/orders", orderRoutes);
router.use("/currencies", currencyRoutes);
router.use("/operations", operationRoutes);
router.use("/admin", adminRoutes);
router.use("/status", statusRoutes);

module.exports = router;



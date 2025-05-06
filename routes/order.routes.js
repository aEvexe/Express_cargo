const express = require("express");
const router = express.Router();
const {
  findAll,
  findOne,
  createOrder,
  updateOrder,
  removeOrder,
} = require("../controllers/order.controller");

router.get("/all", findAll);
router.get("/:id", findOne);
router.post("/create", createOrder);
router.put("/:id", updateOrder);
router.delete("/:id", removeOrder);

module.exports = router;

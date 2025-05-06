const express = require("express");
const router = express.Router();
const {
  findAll,
  findOne,
  createCurrency,
  updateCurrency,
  removeCurrency,
} = require("../controllers/currency_type.controller");

router.get("/all", findAll);
router.get("/:id", findOne);
router.post("/create", createCurrency);
router.put("/:id", updateCurrency);
router.delete("/:id", removeCurrency);

module.exports = router;

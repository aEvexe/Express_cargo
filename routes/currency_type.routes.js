const express = require("express");
const router = express.Router();
const {
  findAll,
  findOne,
  createCurrency,
  updateCurrency,
  removeCurrency,
} = require("../controllers/currency_type.controller");

router.get("/", findAll);
router.get("/:id", findOne);
router.post("/", createCurrency);
router.put("/:id", updateCurrency);
router.delete("/:id", removeCurrency);

module.exports = router;

const express = require("express");
const { findAll, findOne, createOperation, updateOperation, removeOperation } = require("../controllers/operation.controller");
const router = express.Router();

router.get("/all", findAll);
router.get("/:id", findOne);
router.post("/create", createOperation);
router.put("/:id", updateOperation);
router.delete("/:id", removeOperation);

module.exports = router;

const express = require("express");
const { findAll, findOne, createStatus, updateStatus, removeStatus } = require("../controllers/status.controller");
const router = express.Router();

router.get("/all", findAll);
router.get("/:id", findOne);
router.post("/create", createStatus);
router.put("/:id", updateStatus);
router.delete("/:id", removeStatus);

module.exports = router;
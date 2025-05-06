const express = require("express");
const { findAll, findOne, updateAdmin, removeAdmin, createAdmin } = require("../controllers/admin.controller");
const router = express.Router();


router.get("/all", findAll);
router.get("/:id", findOne);
router.post("/create", createAdmin);
router.put("/:id", updateAdmin);
router.delete("/:id", removeAdmin);

module.exports = router;
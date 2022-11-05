const express = require("express");
const { postForm } = require("../controllers/uesrController");

const router = express.Router();

// Post a Form
router.post("/", postForm);

module.exports = router;

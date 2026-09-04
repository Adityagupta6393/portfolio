const express = require("express");

const {
  getLeetCodeData,
} = require("../controllers/leetcodeController");

const router = express.Router();

router.get("/", getLeetCodeData);

module.exports = router;
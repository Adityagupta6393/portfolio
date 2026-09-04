const express = require("express");

const { getGithubData } = require("../controllers/githubController.js");

const router = express.Router();

router.get("/", getGithubData);

module.exports = router;
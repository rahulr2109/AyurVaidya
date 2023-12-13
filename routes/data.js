const express = require("express");

const { verifyToken } = require("../middleware/auth");
const dataControllers = require("../controllers/dataControllers")

const router = express.Router();

router.post("/", verifyToken, dataControllers.createPrediction);
router.post("/feed", dataControllers.feedData);

module.exports = router;
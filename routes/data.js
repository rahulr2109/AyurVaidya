const express = require("express");

const { verifyToken } = require("../middleware/auth");
const dataControllers = require("../controllers/dataControllers")

const router = express.Router();

router.post("/", verifyToken, dataControllers.createPrediction);
router.post("/feed", dataControllers.feedData);
router.get("/history/:id", verifyToken, dataControllers.userHistory);
router.post("/get", verifyToken, dataControllers.getFormRes);
// router.get("/:id", optionallyVerifyToken,dataControllers.getDisease);

module.exports = router;
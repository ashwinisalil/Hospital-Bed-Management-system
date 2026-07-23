const express = require("express");
const router = express.Router();

const { updateBeds,
    getAvailableBeds
 } = require("../controllers/bedControllers");

router.post("/update", updateBeds);
router.get("/available", getAvailableBeds);

module.exports = router;
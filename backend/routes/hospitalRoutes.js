const express = require("express");
const router = express.Router();

const {
    registerHospital,
    loginHospital, 
    updateBeds
} = require("../controllers/hospitalController");

router.post("/register", registerHospital);
router.post("/login", loginHospital);
router.post("/update-bed", updateBeds);

module.exports = router;


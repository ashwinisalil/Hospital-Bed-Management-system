const express = require("express");
const router = express.Router();

const {
    registerAmbulance,
    loginAmbulance
} = require("../controllers/ambulanceController");

router.post("/register", registerAmbulance);
router.post("/login", loginAmbulance);

module.exports = router;
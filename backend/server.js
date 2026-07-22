const express = require("express");
const db = require("./config/db");
const hospitalRoutes = require("./routes/hospitalRoutes");
const ambulanceRoutes=require("./routes/ambulanceRoutes");
const path = require("path");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/hospital", hospitalRoutes);
app.use("/ambulance", ambulanceRoutes );
app.use(express.static(path.join(__dirname, "../pages")));
app.use("/css", express.static(path.join(__dirname, "../css")));

// Home Route
app.get("/", (req, res) => {
    res.send("Emergency Hospital Bed Management System");
});

// Start Server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
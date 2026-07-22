const db = require("../config/db");

const registerAmbulance = (req, res) => {

    const {
        driver_name,
        vehicle_number,
        phone,
        username,
        password
    } = req.body;

    const sql = `
        INSERT INTO ambulance
        (driver_name, vehicle_number, phone, username, password)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [driver_name, vehicle_number, phone, username, password],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).send("Registration Failed");
            }
            res.redirect("/ambulance-dashboard.html");
        });

};

module.exports = { registerAmbulance };

const loginAmbulance = (req, res) => {

    const { username, password } = req.body;

    const sql = `
        SELECT * FROM ambulance
        WHERE username = ? AND password = ?
    `;

    db.query(sql, [username, password], (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).send("Server Error");
        }

        if (result.length === 0) {
            return res.send("Invalid Username or Password");
        }

        res.redirect("/ambulance-dashboard.html");

    });

};

module.exports = {
    registerAmbulance,
    loginAmbulance
};
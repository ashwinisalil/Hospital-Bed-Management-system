const db = require("../config/db");

const updateBeds = (req, res) => {

    const {
        hospital_id,
        normal_beds,
        icu_beds,
        emergency_beds
    } = req.body;

    const sql = `
        UPDATE bed
        SET
            normal_beds=?,
            icu_beds=?,
            emergency_beds=?
        WHERE hospital_id=?
    `;

    db.query(
        sql,
        [normal_beds, icu_beds, emergency_beds, hospital_id],
        (err, result) => {

            if (err) {
                console.log(err);
                return res.status(500).send("Update Failed");
            }

            res.redirect("/hospital-dashboard.html");
        }
    );
};
const getAvailableBeds = (req, res) => {

    const sql = `
        SELECT
            hospital.hospital_id,
            hospital.hospital_name,
            hospital.address,
            hospital.city,
            hospital.phone,
            bed.normal_beds,
            bed.icu_beds,
            bed.emergency_beds
        FROM hospital
        INNER JOIN bed
        ON hospital.hospital_id = bed.hospital_id
    `;

    db.query(sql, (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).send("Server Error");
        }

        res.json(result);

    });

};

module.exports = {
    updateBeds,
    getAvailableBeds
};


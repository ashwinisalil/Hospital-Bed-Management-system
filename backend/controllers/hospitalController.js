const db = require("../config/db");

const registerHospital = (req, res) => {
    const {
        hospital_name,
        address,
        city,
        phone,
        username,
        password
    } = req.body;

    const sql = `
        INSERT INTO hospital
        (hospital_name, address, city, phone, username, password)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [hospital_name, address, city, phone, username, password],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Registration Failed");
            }

            res.redirect("/hospital-dashboard.html");
        }
    );
};

module.exports = { registerHospital };

const loginHospital=(req, res)=>{
    const {username, password}=req.body;
    const sql=`
        SELECT * FROM hospital
        WHERE username=? AND password=?
    `;
    db.query(sql,[username,password], (err, result)=>{
        if(err){
            console.log(err);
            return res.status(500).send("server Error");
        }
        if(result.length==0){
             return res.send("Invalid Username or Password");
        }
        res.redirect("/hospital-dashboard.html");
    });
};


module.exports = {
    registerHospital,
    loginHospital
};
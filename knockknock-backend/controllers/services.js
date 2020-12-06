var mysqlConnectionObject = require("../mysqlconnection");

exports.getServiceCategory = (req, res) => {

    console.log("inside router")
    let SQLQuery =`SELECT * FROM knockknock.techniciancategory;`;
    mysqlConnectionObject.query(SQLQuery, (err, result) => {
        if (err) {console.log(err);}
        else {
            res.status(200).json(result);
        }
    });
};

exports.getServiceCategoryRegex = (req, res) => {

    console.log("inside router")
    if (req.body) {
        let SQLQuery =`SELECT * FROM knockknock.techniciancategory WHERE CategoryName LIKE '%${req.body.searchValue}%';`;
        mysqlConnectionObject.query(SQLQuery, (err, result) => {
            if (err) {console.log(err);}
            else {
                res.status(200).json(result);
            }
        });
    } else {
        res.status(400).json({msg: "search not found"});
    }
};

exports.getBookingDetails = (req, res) => {

    console.log("inside router booking");
    if (req.body) {
        let SQLQuery = `SELECT * FROM knockknock.Booking WHERE TechnitionID LIKE '%${req.body.searchValue}%';`;
        mysqlConnectionObject.query(SQLQuery, (err, result) => {
            if (err) { console.log(err); }
            else {
                res.status(200).json(result);
            }
        });

       
    } else {
        res.status(400).json({ msg: "search not found" });
    }
};

 
exports.allTechList = (req, res) => {

    console.log("inside router all tech list")
    let SQLQuery = `SELECT * FROM knockknock.technician;`;
    mysqlConnectionObject.query(SQLQuery, (err, result) => {
        if (err) { console.log(err); }
        else {
            res.status(200).json(result);
        }
    });
};
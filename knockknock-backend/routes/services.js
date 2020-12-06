var express = require("express");
var router = express.Router();
var controller = require("../controllers/services");

router.get("/list-service-category", controller.getServiceCategory);
router.post("/list-service-category-regex", controller.getServiceCategoryRegex);
//added below varlock
router.post("/list-booking-details", controller.getBookingDetails);
router.get("/list-tech", controller.allTechList);

module.exports = router;


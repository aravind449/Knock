var express = require("express");
var router = express.Router();
var controller = require("../controllers/services");

router.get("/list-service-category", controller.getServiceCategory);
router.post("/list-service-category-regex", controller.getServiceCategoryRegex);

module.exports = router;


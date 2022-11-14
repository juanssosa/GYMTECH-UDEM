var express = require('express');
var router = express.Router();
const medicalRecordController = require("../controllers/medicalRecordController");

/* GET users listing. */
router.get('/', medicalRecordController.medrec);

module.exports = router;
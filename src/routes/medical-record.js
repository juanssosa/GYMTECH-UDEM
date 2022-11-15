var express = require('express');
var router = express.Router();
const medicalRecordController = require("../controllers/medicalRecordController");

/* GET users listing. */
router.get('/', medicalRecordController.getAllMR);
router.get('/:mrid', medicalRecordController.getMRById);
router.post('/', medicalRecordController.insertMR);
router.put('/:mrid', medicalRecordController.updateMR);
router.delete('/:mrid', medicalRecordController.deleteMR);

module.exports = router;
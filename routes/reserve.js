var express = require('express');
var router = express.Router();
const reserveController = require("../controllers/reserveController");

/* GET users listing. */
router.get('/', reserveController.reserves);

module.exports = router;
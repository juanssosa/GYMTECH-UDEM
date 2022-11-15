var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController");

/* GET users listing. */
router.get('/', usersController.getAllUsers);
router.post('/', usersController.insertUser);

module.exports = router;
var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController");

/* GET users listing. */
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.insertUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
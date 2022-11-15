var express = require('express');
var router = express.Router();
const reserveController = require("../controllers/reserveController");

/* GET users listing. */
router.get('/', reserveController.getAllReserves);
router.get('/:rid', reserveController.getReserveById);
router.post('/', reserveController.insertReserve);
router.put('/:rid', reserveController.updateReserve);
router.delete('/:rid', reserveController.deleteReserve);

module.exports = router;
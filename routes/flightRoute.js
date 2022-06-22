const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.getAllFlight)
router.post('/', controller.addFlight)
router.get('/:id', controller.getSingleFlight)
router.patch('/:id', controller.updateFlight)
router.delete('/:id', controller.deleteFlight)

module.exports = router;


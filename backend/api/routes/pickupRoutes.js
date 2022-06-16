const express = require('express');
const { requireAuth } = require('../../config/authMiddleware');
const router = express.Router();
const pickupController = require('../controllers/pickup/pickupController')
const createPickup = require('../controllers/pickup/createPickup')

router.get('/all', requireAuth, pickupController.allPickups_get)

router.post('/', requireAuth, createPickup.createPickup_post)

router.put('/accept', requireAuth, pickupController.pickupAccept_put)


module.exports = router
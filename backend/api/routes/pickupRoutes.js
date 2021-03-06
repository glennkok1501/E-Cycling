const express = require('express');
const { requireAuth } = require('../../config/authMiddleware');
const router = express.Router();
const pickupController = require('../controllers/pickup/pickupController')
const createPickup = require('../controllers/pickup/createPickup')
const createSelfPickup = require('../controllers/pickup/createSelfPickup')


router.get('/all', requireAuth, pickupController.allPickups_get)

router.get('/history', requireAuth, pickupController.pickupsHistory_get)

router.get('/', requireAuth, pickupController.myPickups_get)

router.post('/self', requireAuth, createSelfPickup.selfPickup_post)

router.post('/', requireAuth, createPickup.createPickup_post)

router.put('/accept', requireAuth, pickupController.pickupAccept_put)

router.put('/complete', requireAuth, pickupController.pickupComplete_put)

router.put('/rate', requireAuth, pickupController.rate_put)


module.exports = router
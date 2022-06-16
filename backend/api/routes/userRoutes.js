const express = require('express');
const { requireAuth } = require('../../config/authMiddleware');
const router = express.Router();
const userController = require('../controllers/user/userController')
const addressController = require('../controllers/user/addressController')

router.get('/:id', requireAuth, userController.user_get)

router.get('/address', requireAuth, addressController.address_get)

router.post('/address', requireAuth, addressController.address_post)

router.delete('/address', requireAuth, addressController.address_delete)

module.exports = router
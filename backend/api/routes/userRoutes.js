const express = require('express');
const { requireAuth } = require('../../config/authMiddleware');
const router = express.Router();
const userController = require('../controllers/user/userController')

router.get('/:id', requireAuth, userController.user_get)

module.exports = router
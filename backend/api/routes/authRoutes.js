const express = require('express');
const { requireAuth } = require('../../config/authMiddleware');
const router = express.Router();
const authController = require('../controllers/auth/authController')

router.post('/signup', authController.signup_post)

router.post('/login', authController.login_post)

router.get('/logout', authController.logout_get)

router.get('/verify', requireAuth, authController.verify_get)

module.exports = router
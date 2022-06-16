const express = require('express');
const { requireAuth } = require('../../config/authMiddleware');
const router = express.Router();
const UploadPost = require('../controllers/post/UploadPost')
const postController = require('../controllers/post/postController')

router.get('/', requireAuth, postController.posts_get)

router.post('/upload', requireAuth, UploadPost.upload_post)

module.exports = router
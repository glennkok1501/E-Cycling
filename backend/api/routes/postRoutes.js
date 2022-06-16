const express = require('express');
const { requireAuth } = require('../../config/authMiddleware');
const router = express.Router();
const UploadPost = require('../controllers/post/UploadPost')
const postController = require('../controllers/post/postController')
const commentController = require('../controllers/post/commentController')

router.get('/user/:id', requireAuth, postController.userPosts_get)

router.get('/', requireAuth, postController.posts_get)

router.post('/upload', requireAuth, UploadPost.upload_post)

router.post('/comment/:postId', requireAuth, commentController.comment_post)

module.exports = router
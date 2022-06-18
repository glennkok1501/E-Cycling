const express = require('express');
const router = express.Router();
const noticeUpload = require('../controllers/notice/noticeUpload')
const noticeController = require('../controllers/notice/noticeController')

router.get('', noticeController.notice_get)

router.post('/upload', noticeUpload.upload_post)

module.exports = router
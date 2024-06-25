const express = require('express');
const {getMain, getComments, getComment} = require('../controller/Cmain');
const router = express.Router();

router.get('/', getMain);
router.get('/comments', getComments);
router.get('/comments/:id', getComment);

module.exports = router;
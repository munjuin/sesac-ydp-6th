const express = require('express');
const controller = require('../controller/Cuser');
// const {getMain, getComments, getComment } = require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.getUser);//이 파일만 보면 root 요소로 요청을 보내는것 같지만 app.js 파일에서의 기본경로가 /user가 root로 설정 되어있기 때문에 'localhost:PORT/user/'가 된다

module.exports = router;
// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();


//환영 메시지와 함께 회원가입/로그인 링크 보여주기
router.get('/user', controller.getUser);

//회원가입 페이지 보여주기
router.get('/user/signup', controller.getSignup);

//새로운 회원 생성하기
router.post('/user/signup', controller.postSignup);

//로그인 페이지 보여주기
router.get('/user/signin', controller.getSignin);

// //로그인회원 조회
router.post('/user/signin', controller.postSignin);

// //로그인 성공시 회원 정보 수정 페이지 접속
router.post('/user/profile', controller.postProfilePage)

// //회원정보수정
router.patch('/user/profile/edit', controller.patchProfileEdit);

// //회원삭제
router.delete('/user/profile/delete', controller.deleteProfiledelete);


module.exports = router;


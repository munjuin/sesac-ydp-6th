// TODO: 컨트롤러 코드
const User = require('../model/User');
//메인페이지
exports.getUser = (req, res)=>{
  res.render('index');
};
//회원가입페이지
exports.getSignup = (req, res)=>{
  res.render('signup');
};
//회원가입기능
exports.postSignup = (req, res)=>{
  User.postSignup(req.body, (result)=>{
    res.send({ id : result });
  });
};
//로그인페이지
exports.getSignin = (req, res)=>{
  res.render('signin');
};
//로그인 회원 조회
exports.postSignin = (req, res)=>{
  User.postSignin(req.body, (result)=>{
    res.send({ data : result});
  })
};
 //로그인 성공시 회원 정보 수정 페이지 접속\
exports.postProfile = (req, res)=>{
  res.render('profile');
};
//회원정보수정
exports.patchProfileEdit = (req, res)=>{
  User.patchProfileEdit(req.body, (result)=>{
    res.send({ data : result });
  });
};
//회원삭제
exports.deleteProfiledelete = (req, res)=>{
  User.deleteProfiledelete(req.body, (result)=>{
    res.send({ data : result });
  });
};

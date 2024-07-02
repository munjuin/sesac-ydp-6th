const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const cookieParser = require('cookie-parser');

dotenv.config({
  path: path.resolve(__dirname, `.env`),
});

const port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended : true }));
app.use(cookieParser());

const cookieConfig = {
  httpOnly: true, // 웹 서버를 통해서만 쿠키에 접근 가능 -> front js에서 document.cookie 로 접근 차단,
  maxAge: 60 * 1000, // 쿠키 수명 (단위: ms)
  // expires: 만료 날짜/시간 지정 가능
  signed: false, // 쿠키의 암호화 (req.signedCookies)
  // secure: 웹 브라우저와 웹 서버가 https 통신하는 경우만 쿠키를 서버에 전송
}

app.use(cookieParser(process.env.COOKIE_SECRET));

const cookieConfig = {
  httpOnly: true,//웹서버를 통해서만 쿠키에 접근 -> 웹브라우저의 자바스크립트 코드(프론트 JS파일)에서는 이 코드에 접근 불가
  maxAge: 60 * 1000,//쿠키의 수명의 (ms) 단위로 설정
  // expires 쿠키의 만료 날짜/시간 설정
  signed: false//암호화 true로 설정되면 cookie-parser 미들웨어가 쿠키 값을 서명하여 쿠키의 무결성 보장, 이 쿠키는 req.signedCookies 객체에서 접근 할 수 있음
  //secure 웹브라우저와 웹 서버가 https 통신을 하는 경우만 쿠키를 서버에 전송
};
app.get('/', (req, res)=>{
  const popup = req.cookies.popup || '';
  res.render('index', {popup});
});

app.post('/setCookie', (req, res)=>{
  res.cookie('popup', 'hide', cookieConfig);
  res.send('쿠키설정됨');
})

app.listen(port, (req, res)=>{
  console.log(`http://localhost:${port}`);
});

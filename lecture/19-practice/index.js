const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

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



app.get('/', (req, res)=>{
  // const remember = req.body.remember;
  // console.log(remember);
  // // if(req.session.)
  res.render('index');
});

app.listen(port, (req, res)=>{
  console.log(`http://localhost:${port}`);
});
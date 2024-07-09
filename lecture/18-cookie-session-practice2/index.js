const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');


dotenv.config({
  path: path.resolve(__dirname, '.env')
});

const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', './views'); 

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//express-session 미들웨어 등록
app.use(session({
  secret: process.env.COOKIE_SECRET,//필수옵션, 세션 암호화 하는데 쓰는 키
  resave: false,//세션이 변경되지 않더라도 매번 다시 저장 할지 설정
  saveUninitialized: false, //세션을 초기값이 지정되지 않은 상태에서도 처음부터 세선을 생성할지 설정
  cookie: {//세션도 쿠키의 일종이기 때문에 쿠키 설정도 가능함
    httpOnly: true,
    secure: false,
    maxAge: 60* 1000,
  }
}));

//라우팅 분리
const indexRouter = require('./routes/user'); 
app.use('/', indexRouter); 

//404 에러처리
app.get('*', (req, res) =>{
  res.render('404')
});

// express 애플리케이션 서버를 특정 포트에서 실행
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});



var xhr = new XMLHttpRequest(); var url = 'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&nation=대한민국'); /*URL*/ var queryParams = '?' + encodeURIComponent('ServiceKey=
7UQ2Y40GBL8PYJ16YGU0'; /*Service Key*/ queryParams += '&' + encodeURIComponent('val001') + '=' + encodeURIComponent('2018')); /*상영년도*/ queryParams += '&' + encodeURIComponent('val002') + '=' + encodeURIComponent('01')); /*상영월*/ xhr.open('GET', url + queryParams); xhr.onreadystatechange = function () { if (this.readyState == 4) { alert('Status: '+this.status+'Headers: '+JSON.stringify(this.getAllResponseHeaders())+'Body: '+this.responseText); } }; xhr.send('');
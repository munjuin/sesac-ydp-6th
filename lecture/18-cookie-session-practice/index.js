//express 라이브러리 사용을 위해서 express 모듈을 외부에서 불러옴
const express = require('express');

//dotenv 라이브러리 사용을 위해서 dotenv 모듈을 외부에서 불러옴
const dotenv = require('dotenv');

//path 라이브러리 사용을 위해서 path 모듈을 외부에서 불러옴
const path = require('path');

//cookie-parser 라이브러리 사용을 위해서 cookie-parser 모듈을 외부에서 불러옴
const cookieParser = require('cookie-parser');

//express-session 라이브러리 사용을 위해서 express-session 모듈을 외부에서 불러옴
const session = require('express-session');

//불러온 dotenv 모듈을 사용해서 .env 파일에 저장된 환경변수를 불러옴
//로드 된(불러 온) 데이터는  process.env 객체에 저장 됨
dotenv.config({
  path: path.resolve(__dirname, './env/.env')
});

//express()함수를 호출해서 새로울 express 애플리케이션 객체를 생성해 express 라이브러리 기능을 사용할 수 있게 함
const app = express();

//템플릿엔진 설정
app.set('view engine', 'ejs');//view engine(템플릿 엔진)으로 ejs를 사용하겠다는 뜻
app.set('views', './views');//views폴터의 경로는 ./views다

//쿠키파서 미들웨어 함수 등록
//cookieParser(secretKey, optionObj)
//비밀키 값을 통해 해당 쿠키가 이 서버가 만듬 쿠키인지 검증, 쿠키는 클라이언트에 저장되는 정보다 보니 위조가 쉬워서 비밀키를 통해 만든 서명을 쿠키 뒤에 붙임
app.use(cookieParser(process.env.COOKIE_SECRET));

//쿠키의 옵션(설정)을 정의하는 객체
const cookieConfig = {
  httpOnly: true,//웹서버를 통해서만 쿠키에 접근 -> 웹브라우저의 자바스크립트 코드(프론트 JS파일)에서는 이 코드에 접근 불가
  maxAge: 60 * 1000,//쿠키의 수명의 (ms) 단위로 설정
  // expires 쿠키의 만료 날짜/시간 설정
  signed: true//암호화 true로 설정되면 cookie-parser 미들웨어가 쿠키 값을 서명하여 쿠키의 무결성 보장, 이 쿠키는 req.signedCookies 객체에서 접근 할 수 있음
  //secure 웹브라우저와 웹 서버가 https 통신을 하는 경우만 쿠키를 서버에 전송
};

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


//dotenv.config 함수를 통해 불러온 데이터가 저장된 process.env 객체를 통해 환경 변수에 접근
const port = process.env.PORT;

//라우팅
//get방식으로 '/' URL에 요청을 하면
app.get('/', (req, res)=>{
  res.render('index');//ejs를 사용하는 경우 render를 통해 화면에 ejs파일을 랜더링 해줌
});

//쿠키 설정하는 코드
app.get('/setCookie', (req, res)=>{
  //res.cookie(키, 값, 옵션)
  //서버가 클라이언트에 응답하는게 아님, 그냥 쿠키만 설정(응답하기 전의 상태임)
  //즉 쿠키를 설정하는 메서드는 서버가 클라이언트에 응답하는 코드가 아님
  res.cookie('myKeyTest', 'myValueTest', cookieConfig);
  
  //클라이언트에 응답
  //클라이언트에 실제 응답을 보내야 쿠키가 클라이언트에 전달되기 때문에 응답을 보내지 않으면 쿠키설정도 끝나지 않음
  res.send('쿠기 설정 완료');
});

//쿠키 확인하는 코드
app.get('/getCookie', (req, res)=>{
  //req.signedCookies 객체는 cookie-parser가 만든 요청의 서명된 쿠키 해석
  res.send(req.signedCookies);//옵션에서 signed: true 설정이 되어 있어야 req.signedCookies 객체에 접근 가능
});

//쿠키 삭제하는 코드
app.get('/clearCookie', (req, res)=>{
  //res.clearCookie(키, 값, 옵션)
  //쿠키를 삭제하는 메서드는 서버가 클라이언트에 응답하는게 아님 따라서 클라이언트 응답이 따로 있어야만 쿠키 삭제도 완료 됨
  //쿠키를 삭제하는 경우 키 값 옵션이 일치해야만 함(단 maxAge/ expires 키는 일치하지 않아도 됨)
  res.clearCookie('myKeyTest', 'myValueTest', cookieConfig);

  //클라이언트에 응답
  //클라이언트에 실제 응답을 보내야 쿠키가 클라이언트에 전달되기 때문에 응답을 보내지 않으면 쿠키설정도 끝나지 않음
  res.send('쿠기 삭제 함');
});

//세션 설정하는 코드
app.get('/set', (req, res)=>{
  if(req.session.name){//만약 req.session.name이 존재 한다면,
    ///set?name=John&age=30 같은 경우 쿼리의 값이 req.session.name, req.session.age로 할당 됨
    req.session.name = req.query.name;//
    req.session.age = req.query.age;
  } else {//req.session.name이 존재하지 않으면 
    req.session.name = '바나나';
    req.session.age = 10;
  }
  // console.log(req.session.name);//쿼리값이 없을때는 '바나나', 10 이 나오다가
  // console.log(req.session.age);//'바나나', 10 으로 설정 된 후에는 쿼리에 값이 없는 undefined로 할당 됨
  res.send('세션 설정 완료');
});

//세션 확인하는 코드
app.get('/name', (req, res) => {
  console.log('req.session >> ', req.session);
  res.send({ id: req.sessionID, name: req.session.name });
});

//세션 삭제하는 코드
app.get('/destroy', (req, res) => {
  req.session.destroy((err) => {//완전히 삭제 값만 삭제하여 undefined가 되는게 아님
      if (err) {
          throw err;
      }
      res.redirect('/name'); // 경로를 변경한다!
  })
});


//express 애플리케이션 서버를 특정 포트에서 실행
app.listen(port, ()=>{
  console.log(`http://localhost:${port} 에서 서버 실행 중`);
});
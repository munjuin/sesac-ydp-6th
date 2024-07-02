//express 라이브러리 사용을 위해서 express 외부 모듈을 불러옴
const express = require('express');

//.env 파일에 정보를 저장
  // const port = 8080;

//express 함수를 호출해서 새로운 express 애플리케이션 객체를 생성함
const app = express(); 

//dotenv 모듈을 사용하기 위해서 외부에서 모듈을 불러옴
const dotenv = require('dotenv');

//path 모듈을 사용하기 위해서 외부에서 모둘을 불러옴
const path = require('path');

//불러온 dotenv 모듈을 사용해서 .env 파일의 환경 변수를 불러옴
  //dotenv.config 함수는 .env파일의 경로를 설정함
dotenv.config({
  //경로를 불러올때 path 라이브러리를 사용해서 불러옴
  path: path.resolve(__dirname, `./env/.env`)// path.resolve는 path.resolve(경로, 파일명)이 들어감
});

//process.env 객체를 통해서 환경 변수에 접근
const port = process.env.PORT;

//템플릿엔진 설정
app.set('view engine', 'ejs');//view engine(템플릿 엔진)으로 ejs를 사용하겠다 
app.set('views', './views');//view 폴더의 경로는 ./view다 

//라우팅
//get 방식으로 '/' url 주소로 요청이 들어 왔을때 
app.get('/', (req, res)=>{
  res.render('index');//ejs를 사용하는 경우 render로 화면에 ejs 파일을 보여줌
})

// express 애플리케이션 서버를 특정 포트에서 실행
app.listen(port, ()=>{ 
  console.log(`http://localhost:${port} 에서 서버 실행 중`);
});
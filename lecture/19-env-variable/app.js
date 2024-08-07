// const ps = process.env;
// console.log(ps); // 객체

const express = require("express"); //express 라이브러리 사용을 위해서 express 외부 모듈을 불러옴
const path = require("path");
const dotenv = require("dotenv");
const app = express(); //express 함수를 호출하는

// dotenv 모듈을 이용해서 .env 파일의 환경 변수를 불러옴
dotenv.config({
  path: path.resolve(__dirname, ".env"),
});
dotenv.config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
}); //NODE_ENV에 따라서 적절한 .env 파일을 로드 (.env.development, .env.production)

// process.env 객체를 통해 환경 변수에 접근
const port = process.env.PORT || 5000;
const dbName = process.env.DATABASE_NAME;
const dbPw = process.env.DATABASE_PW;

app.listen(port, () => {
  console.log(`Sever is running! The port number is ${port} ...`);
  console.log(`Database(${dbName}) is connected! The password is ${dbPw}`);
});

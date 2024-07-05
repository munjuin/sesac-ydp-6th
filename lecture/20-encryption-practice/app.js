const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

//환경변수 경로 설정
dotenv.config({
  path: path.resolve(__dirname, `./.env`),
  override: true,
});
//환경변수 불러 오기
const PORT = process.env.PORT || 8080;

//특정 포트번호로 서버 열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 에서 서버 실행 중`);
});

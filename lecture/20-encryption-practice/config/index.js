//중앙 모듈 로더로써 모듈을 불러오고, 데이터베이스 열결까지 하는 파일

//1. Sequelize는 sequelize패키지(모듈을 모아놓은 것)에서 Sequelize는 클래스를 가져옴
//Sequelize 클래스는 데이터베이스 연결을 설정하고 모델을 정의하고 쿼리를 실행 함
const { Sequelize } = require("sequelize");

//2. dotenv패키지를 로드하여 환경변수파일에 정의된 환경변수를 process.env에 로드(저장) 함 이를 통해 환경변수에 접근 가능
// require("dotenv").config();
const dotenv = require("dotenv");

//3. path 모듈을 불러와서 객체를 생성 ㅁ치
const path = require("path");
const express = require("express");

// 데이터베이스 연결 설정
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

module.exports = {
  sequelize,
  express,
  path,
  dotenv,
};

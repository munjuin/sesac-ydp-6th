const express = require('express');
const path = require('path');
const app = express();
const port = 7000;

// 정적 파일을 제공하기 위해 express.static을 사용합니다.
app.use(express.static(path.join(__dirname)));

// 기본 경로로 접근 시 index.html 파일을 제공하는 라우트
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 서버를 8080 포트에서 실행
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

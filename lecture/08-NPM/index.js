const http = require('http');
console.log(http);

//http 모듈이 가지고 있는 서버 만드는 기능을 사용해보자
const server = http.createServer();
server.listen(8000, ()=>{
  console.log('8000포트에서 서버 실행 중');
});

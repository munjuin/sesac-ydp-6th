//url 모듈은 웹 주소를 읽어온다
//읽어온 내용을 구문분석하여 주소의 각 부분으로 나누고 객체로 변환한다

// var addr = 'https://localhost:8000/example.htm?year=2024&month=feb';
// var addr = 'https://localhost:8000/demo.htm?id=2024&pw=feb';
// // ?이후에 url은 쿼리임
// var q = url.parse(addr, true);
// // console.log(q);
// console.log(q.pathname);
// console.log(q.search);
// var qdata = q.query;//?year=2024&month=feb
// console.log(qdata);
// console.log(qdata.month);//기존 쿼리에서 month에 해당하는것만 출력

const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res)=>{
  var q = url.parse(req.url, true); 
  var filename = '.' + q.pathname;
  // var filename = '/' + q.pathname;

  fs.readFile(filename, (err, data)=>{//url 경로가 없으면 err / 있으면 data
    if(err){
      res.writeHead(404, {'Content' : 'text/html'});
      return res.end('404 not found');
    }
    res.writeHead(200, {'Content' : 'text/html'});
    res.write(data);
    return res.end();
  })

}).listen(8000, ()=>{
  console.log('8000 서버실행중');
})
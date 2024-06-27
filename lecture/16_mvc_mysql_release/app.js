const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views'); 

app.use('/static', express.static(__dirname + '/static'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
//'/'경로에 들어오는 모든요청을 './routes/user'파일에 정의된 라우터에서 처리하도록 설정
const indexRouter = require('./routes/user');
app.use('/', indexRouter);


// TODO: 404 에러 처리
app.get('*', (req, res)=>{
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/user`);
});

//app.js구성-> route->controller->model

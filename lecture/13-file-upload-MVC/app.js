const express = require('express');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views'); 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/static', express.static(__dirname + '/public'));
app.use('/uploads', express.static(__dirname + '/uploads'));

const indexRouter = require('./routes'); // index는 생략 가능!
app.use('/', indexRouter); // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 






app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});
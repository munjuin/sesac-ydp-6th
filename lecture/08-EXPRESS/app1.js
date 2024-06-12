const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res)=>{
  res.render('index.ejs', { title : '홈' });
})
app.get('/about', (req, res)=>{
  res.render('about.ejs', { title : '소개' });
})
app.get('/create', (req, res)=>{
  res.render('create.ejs', { title : '작성' });
})

app.listen(PORT, ()=>{
  console.log('8000 서버 실행 중');
})
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res)=>{
  res.render('index.ejs', {title : 'Home'});

})
app.get('/about', (req, res)=>{
  res.render('about.ejs', {title : 'About'});

})
app.get('/create', (req, res)=>{
  res.render('create.ejs', {title : 'Create'});

})
app.use((req, res)=>{
  res.status(404).render('404');
})

app.listen(8000, ()=>{
  console.log('8000 서버 실행 중');
})
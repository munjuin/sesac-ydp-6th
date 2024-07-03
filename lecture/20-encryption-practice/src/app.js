const express = require('express');
const dotenv = require('dotenv');
const path = require('path');


const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

dotenv.config({
  path: path.resolve(__dirname, '../env/.env')
});

const port = process.env.PORT;


app.listen(port, ()=>{
  console.log(`http://localhost:${port} 에서 서버 실행 중`);
});
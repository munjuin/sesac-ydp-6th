const express = require('express');
const session = require('express-session');
const path = require('path');
const dotenv = require('dotenv');
const app = express();

dotenv.config({
  path: path.resolve(__dirname, `.env`),
});

const port = process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended : true }));



app.get('/', (req, res)=>{
  // const remember = req.body.remember;
  // console.log(remember);
  // // if(req.session.)
  res.render('index');
});

app.listen(port, (req, res)=>{
  console.log(`http://localhost:${port}`);
});
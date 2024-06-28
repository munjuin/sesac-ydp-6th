const express = require('express');
const app = express();
const PORT = 8000;
const router = require('./routes/index');
const { sequelize } = require('./models');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/', router);

sequelize
    .sync({ force : true })//동기화를 수행하는 역할 
    //.sync({ force : false })를 호출하여 DB와 모델을 동기화 함
    .then(() => {
        app.listen(PORT, () => {
            console.log('Database connection succeeded!')
            console.log(`Server is running! Port number is ${PORT} ...`);
        });
    })
    .catch((err) => {
        console.error(err);
    });
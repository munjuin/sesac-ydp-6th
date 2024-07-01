const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, '.env'),
}); 

const app = express();
const port = process.env.PORT; 

app.set('view engine', 'ejs');
app.set('views', './views');

// express-session 미들웨어
app.use(session({
    // 필수 옵션, 세션 암호화하는데 쓰는 키
    secret: process.env.COOKIE_SECRET,
    // 세션이 변경되지 않더라도 매번 다시 저장할 건지를 설정
    resave: false,
    // 세션을 초기값이 지정되지 않은 상태에서도 처음부터 세션을 생성할 건지 
    saveUninitialized: false,

    //세션 쿠키 설정(세션관리할 때 클라이언트로 보내는 쿠키)
    cookie: {
      httpOnly: true,//
      secure: false,
      maxAge: 60 * 1000, 
      //expires 둘다 설정 가능 ex.특정시간에는 세션을 다 만료 시켜야만 하는 경우
      
    }
}))
// 인자로 세션에 대한 설정 객체를 넣음

app.get('/', (req, res) => {
    res.render('session');
})

app.get('/set', (req, res) => {
    // 세션 설정
    // req.session.키 = 값;

    // console.log(req.query) // {}, {name: x, age: y}
    if (req.query.name) {
        req.session.name = req.query.name;
        req.session.age = req.query.age;
    } else {
        req.session.name = '바나나';
        req.session.age = 10;
    }

    // { [sid]: { name: '바나나', age: 10 }, [sid2]: { name: '바나나', age: 10 }}
    res.send('세션 설정 완료!');
})

app.get('/name', (req, res) => {
    // 세션 사용(조회)
    // req.session.키

    console.log('req.session >> ', req.session);
    // Session {
    //     cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true },
    //     name: '바나나',
    //     age: 10
    //   }
    res.send({ id: req.sessionID, name: req.session.name });
})

app.get('/destroy', (req, res) => {
    // 세션 삭제
    // req.session.destory(세션 삭제시 호출할 콜백함수)

    req.session.destroy((err) => {
        if (err) {
            throw err;
        }

        // res.send('세션 삭제 완료!'); 
        res.redirect('/name'); // 경로를 변경한다!
    })
})


app.listen(port, () => {
    console.log(`Sever is running! The port number is ${port} ...   `);
});

// express-session 모듈
// : 세션 관리
// ex. 로그인 등 세션을 구현하거나 특정 클라이언트에 대한 데이터를 저장할 때 사용
// -> 사용자 별로 req.session 객체 안에 유지
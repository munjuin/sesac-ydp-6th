// TODO: DB(mysql) 연결
const mysql = require('mysql');
// TODO: 모델 코드
const conn = mysql.createConnection({
  host : 'localhost',
  user : 'user',
  password : '1234',
  database : 'codingon'
});
//회원가입기능
exports.postSignup = (data, callback) =>{
  conn.query(`insert into user (userid, name, pw) values ('${data.userid}', '${data.name}', '${data.pw}')`, (err, rows) => {
    if(err){
      throw err;
    } else {
      console.log('rows', rows);
      callback(rows.insertId);
    }
  })
};
//로그인 회원 조회
exports.postSignin = (data, callback)=>{
  let query;
  if('pw' in data) {
    query = `select * from user where userid = '${data.userid}' and pw = '${data.pw}'`;
  } else {
    query = `select * from user where userid = '${data.userid}'`;
  }
  conn.query(query, (err, rows)=>{
    if(err){
      throw err;
    }
      callback(rows[0]);
    
  })
};

//회원정보수정
exports.postSignin = (data, callback)=>{
  conn.query(`update user set userid = '${data.id}', name = '${data.name}', pw = '${data.pw}'`, (err, rows)=>{
    if(err){
      return err;
    } else {
      callback(true);
    }
  });
};
//회원삭제
exports.deleteProfiledelete = (data, callback) => {
  conn.query(`delete from user where id = ${data.id}`, (err, rows) => {
      if(err) throw err;
      callback(true);
  });
};
//임시로 db에서 유저 한명의 정보를 읽어오는 함수를 가정

exports.getDbUser = ()=>{
  return {
    realId : 'helloworld',
    realPw : 'qwer1234*',
    name : '홍길동',
    age : 20,
  }
}
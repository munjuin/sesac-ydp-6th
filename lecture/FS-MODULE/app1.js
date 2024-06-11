const fs = require('fs');

// fs.readdir('./', (err, files)=>{
//   if(err){
//     return console.log('ERROR', err);
//   } else {
//     console.log('결과는', files);
//   }
// })

// 
// fs.writeFile('mynewfile1.txt', 'hello world!', (err)=>{
//   if(err){
//     return console.log(err);
//   } else {
//     console.log('파일생성됨');
//   }
// })

// fs.open('mynewfile2.txt', 'w', (err, file)=>{
//   if(err) throw err;
//   console.log('파일생성됨');
// })

fs.appendFile('mynewfile1.txt', 'kim', (err)=>{
  if(err) throw err;
    console.log('파일생성됨');
})


//fs모듈을 사용한 것과 express를 사용한것과의 차이를 확인할 것 아마 수업시간에도 할 것 같음
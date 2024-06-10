const fs = require('fs');

  // fs.readFile('./input.txt', (err, data)=>{
  //   console.log(data);
  // })

const data = fs.readFileSync('./input.txt', 'utf-8');
console.log(data);
console.log('파일 읽기 완료');

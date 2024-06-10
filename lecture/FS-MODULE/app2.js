const fs = require('fs');
// fs.unlink('mynewfile2.txt', ()=>{
//   console.log('파일 삭제 완료');
// })

fs.rename('mynewfile1.txt', 'renamefile1.txt', (err)=>{
  if(err){
    throw err;
  } else {
    console.log('파일 이름 변경 완료');
  }
})
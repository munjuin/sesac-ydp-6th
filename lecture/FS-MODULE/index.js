const fs = require('fs');
const path = require('path');

fs.writeFile('demo', '내용임', (err)=>{
  if(err){
    return console.error(err);
  } else {
    console.log('파일 생성 성공');
  }
})

// console.log(__dirname);
// console.log(__filename);

// const add = require('./add');

// console.log(add(3, 5));
// console.log('From index.js');

// require('./batman');
// require('./superman'); 

//함수의 자동실행 형태
//모듈의 가장 기본 형태
(function(){
  const superHero = 'Superman';
  console.log(superHero);
})()

//모듈의 기본 형태
(function(exports, require, module, __filename, __dirname){
  //코드
})()
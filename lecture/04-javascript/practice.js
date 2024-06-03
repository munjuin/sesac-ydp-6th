// let age = prompt();
// function 연령대확인 (){
//   if (age >= 20){
//     return '성인';
//   }else if (age >= 17){
//     return "고등학생";
//   }else if (age >= 14){
//     return "중학생";
//   }else if (age >= 8){
//     return "초등학생";
//   }else if (age >= 0){
//     return "유아";
//   }

// }
// console.log(연령대확인());


// let a = prompt();
// let b = Number(a);
// 학점계산기(b);
// function 학점계산기 (parmas){
//   let num = Math.round(parmas / 10) * 10;
//   switch (num) {
//     case 100:
//       console.log('A');
//       break;
//     case 90:
//       console.log('B');
//       break;
//     case 80:
//       console.log('C');
//       break;
//     case 70:
//       console.log('D');
//       break;
//     case 60:
//       console.log('D');
//       break;
//     default:
//       console.log('P');
//       break;
//   }
// }

// let now = new Date().getHours();

// now < 12 ? console.log('오전') : console.log('오후');

// let cnt = 0;
// for (let i = 1; i <= 20; i++){
//   if(i % 2 == 0){
//     cnt = cnt + i;
//     console.log(cnt , i);
//   }
// }                                                
// console.log(cnt);

// 구구단 while 버전
// let i = 2, j = 1;
// while(i < 10) {
//   while(j < 10) {
//     console.log(i, "x", j, "=", i*j);
//     j++;
//   }
//   i++;
//   j = 1;
// }

// let cnt = 0;
// for (let i = 1; i < 10; i++){
//   for (let j = 1; j <10; j ++){

//     console.log(i, "x", j, "=", i*j);
//   }
//   j=1;
// }

// let a = prompt();
// for (let i = 1; i <= 10000; i++){
//   if(i % 13 === 0 || a % 13 ===0){
//     if(i % 2 === 1 || a % 2 ===1 ){
//       console.log(i, a);
      
//     }
//   }
// }
// let cnt = 0;
// for (let i = 0; i <= 100; i++){
//   if (i % 2 === 0 || i % 5 === 0){
//     cnt = cnt + i;
//     console.log(cnt);
//   }
// }
// let arr = [];
// let sum = 0;
//   for (let i = 1; i <= 100; i++){
//     arr.push(i);
//   }
  
//   for (let i = 0; i < 100; i++){
//     sum = sum + arr[i];
//   }
//   sum = 0;
//   for (let value of arr){
//     sum = sum + value;
//   }
//   sum = 0;
//   arr.forEach((val)=>{
//     sum = sum + val;
//   });

// let fruits1 = ['사과','딸기','파인애플','수박','참외','오렌지','자두','망고'] ;
// let fruits2 = ['수박','사과','참외','오렌지','파인애플','망고'] ;

// let same = fruits1.filter((x) => {
//   return fruits2.includes(x);
// });

// let diff = fruits1.filter((x)=>{
//   return !fruits2.includes(x);
// })

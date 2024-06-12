// const arr1 = [1,2,3,4,5];
// const arr2 = ['a','b','c'];

// const [a,b,c,d,e] = arr1; 

// console.log(e);

// let num1 = 1;
// let num2 = 2;
// //변수값 교환 ES6부터는 제 3의 변수 없이도 변수값 교환 가능
// console.log(num1, num2);
// [num1, num2] = [num2, num1];
// console.log(num1, num2);

// const lists = ['apple', 'orange'];
// [f1, f2, f3='banana'] = lists;//'apple' 'orange' undefined default 설정 해주면 그거 나옴


//객체
const obj = {
  title : '엘리먼트',
  contents : 'fun',
  num : 5,
}
console.log(obj.title);
console.log(obj.contents);
console.log(obj.num);

// 객체 디스트럭쳐링
const {num, title, contents, star = 1000} = obj
console.log(star);

const {a, b, c} = obj;//같은 이름을 사용해야 함
console.log(a, b, c);

const lectureInfo = {
  name : 'codingOn',
  part : 'web',
  leader : 'kim',
}

function getInfo(params){
  const {name, part, leader} = params;
  const output = `${name}강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다`;
  return output;
}
let result = getInfo(lectureInfo);

console.log(result);
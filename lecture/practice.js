// document.querySelector('span').innerHTML = '맛없다ㅡㅡ;';
// document.querySelector('span').style.color = 'red';
// document.querySelector('span').style.fontWeight = 'bold';

// var nums = [100, 200, 300, 400, 500];

// nums.pop();
// nums.pop();

// console.log(nums);

// var arr = [200, 100, 300];
// //pass
// arr.splice(2, 0, 10000);
// console.log(arr);

// var d = {
//   'height':180,
//   'weight':78,
//   'weight':84,
//   'weight':90,
//   'weight':91,
//   'weight':82,
//   'temperature':36,
//   'eyesight':1
// };

// console.log(d['weight']);

// var year = '2019';
// var month = '04';
// var day = '26';
// var hour = '11';
// var minute = '34';
// var second = '27';

// var result = `${year}/${month}/${day} ${hour}:${minute}:second`;
// var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

// console.log(result);

// const n = prompt('숫자를 입력하세요.');
// let tree = '';

// for(let i=1; i<=n; i++){
//   let star = '';
//   for(let j=1; j<=n-i; j++){
//     star += ' ';
//   }
//   for(let k=1; k<=2*i-1; k++){
//     star += '*';
//   }
//   tree += star + '\n';
// }

// console.log(tree);


// let s = 0;

// for (let i = 1; i <= 100; i++){
//   s += i;
// }

// console.log(s);

const word1 = "abc";
const word2 = "xyz";

const add = [...word1, ...word2];
console.log(add);

class Shape {
  constructor(가로, 세로){
    this.가로 = 가로;
    this.세로 = 세로;
  }
  getArea(){
    return this.가로 * this.세로
  }
}

let rec1 = new Shape(3,4);
console.log(rec1.getArea());

class Rectangle extends Shape {
  constructor(가로, 세로){
    super(가로, 세로);
  }
  대각선(params1, params2){
    return Math.sqrt(params1**2 + params2**2);
  }
}
const 사각형 = new Rectangle();
console.log(사각형.대각선(3, 4));

class Triangle extends Shape {
  constructor(가로, 세로){
    super(가로, 세로);
  }
  getArea (params1, params2){
    return params1 * params2 / 2;
  }
}
const 삼각형 = new Triangle();
console.log(삼각형.getArea(3,4));

class Circle extends Shape{
  constructor(가로, 세로, 원주각){
    super(가로, 세로);
    this.원주각 = 원주각;
  }
  getArea (params1, params2){
    return (params1 / 2) ** 2 * params2;
  }

}
const 원 = new Circle();
console.log(원.getArea(4, Math.PI));
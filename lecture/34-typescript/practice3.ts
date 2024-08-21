function sum1 (a:number, b:number):void{
  console.log(a + b);
}

sum1(5,11);

// function sum2 (a:number, b:number, c:number, d:number, e:number):number{
//   return a+b+c+d+e;
// }
// console.log(sum2(1,2,3,4,10));

function sum2(...number:number[]):number{
  // let total = 0;
  // number.forEach((num)=>{
  //   total += num;
  // });
  const total = number.reduce((a,b) => a + b)
  return total;
}

console.log(sum2(1,2,3,4,10));
// forEach(), for, reduce() 방법으로 할 수 있음 차이는 잘 찾아볼 것
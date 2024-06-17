// JSON
const car = `{
  "model": "IONIQ 5",
  "company": "HYUNDAI",
  "price": 50000000,
  "year": 2023,
  "isElectricCar": true,
  "options": ["side mirror", "smart sensor", "built-in cam"]
}`;
console.log(car); // format: JSON

//역직렬화 : JSON.parse() -> 
const obj = JSON.parse(car);
console.log(obj);

//obj변수는 js의 object 이므로 .나 []연산자를 이용해 키 값에 접근 가능


const 제이슨 = JSON.stringify(obj);
console.log(typeof 제이슨);

console.log(제이슨.split(""));
console.log(제이슨.toLocaleUpperCase(s));
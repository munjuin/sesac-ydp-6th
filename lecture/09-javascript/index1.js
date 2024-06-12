const a = [1,2,3];
const b = [4,5];

const spread = [...a, ...b];
console.log(spread);

const c = [...'Hello'];
console.log(c);
const d = 'Hello'.split('');
console.log(d);

const chip = {
  base : 'cjip',
  company : 'lotto',
}
console.log(chip);

const potatoChip = {
  ...chip,
  flaver : 'tomato',
  }
console.log(potatoChip);

const values = [1,2,3,4,5,6];
function get (a, b, c, ...rest) {//앞에서 부터 순서대로 읽고 나머지는 ...rest에 다 넣어달라는 뜻
  console.log(a, b, c);
  console.log(rest);
}
get(...values);

const icecream = {
  company: 'lotte',
  flavor: 'choco',
  price: 1000,
};

const {flavor, ...나머지} = icecream;
console.log(flavor);
console.log(나머지);

const number = [1,2,3,4,5,6,7,8];
const [one1, two1, ...rest2] = number;
console.log(one1, two1);
console.log(rest2);
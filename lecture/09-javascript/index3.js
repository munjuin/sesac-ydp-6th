const x = 5;
const result = x || 100;
console.log(result);

const y = 7;
const result1 = x < y && 'sdflkj가 큼';
console.log(result1);

let userColor = undefined;
let defaultColor = 'blue';

let currentColor = userColor || defaultColor;
console.log(currentColor);
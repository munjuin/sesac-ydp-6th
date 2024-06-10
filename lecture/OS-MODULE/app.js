const os = require('os');
// console.log(os);
// console.log(os.totalmem());

let totalMemory = os.totalmem();
let freeMemory = os.freemem();
console.log(`totalMemory :${totalMemory}`);
console.log(`freeMemory :${freeMemory}`);
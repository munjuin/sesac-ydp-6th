const path = require('path');

// console.log(path);
console.log(path.basename(__dirname));
console.log(path.basename(__filename));
console.log(path.join('a','b','index.html'));

console.log('---------------------------------------------------');

let pathname = path.parse('/home/user/dir/file.txt');
console.log(pathname);

console.log('---------------------------------------------------');

console.log(path.extname('/home/user/dir/file.txt'));
console.log(path.basename('/home/user/dir/file.txt'));


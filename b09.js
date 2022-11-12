let readline = require('readline-sync');
let x = Number(readline.question('Nhap x:  '));
let y = Number(readline.question('Nhap y:  '));
let S = (sqrt(x) + abs(x))/(sqrt(x**y))
console.log('S = ', S);
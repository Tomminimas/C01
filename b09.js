/*Tính S*/
let readline = require('readline-sync');
let x = Number(readline.question('Nhap x:  '));
let y = Number(readline.question('Nhap y:  '));
let S = (Math.sqrt(x) + Math.abs(x))/(Math.sqrt(x**y));
console.log('S = ', S);
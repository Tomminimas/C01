let readline = require('readline-sync');
let a = Number(readline.question('Nhap a:  '));
let b = Number(readline.question('Nhap b:  '));
let c = a; 
a = b;
b = c;
console.log('a = ', a);
console.log('b = ', b);
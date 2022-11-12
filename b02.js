/*Phép chia ba số*/
let readline = require('readline-sync');
let b = Number(readline.question('Nhap b:  '));
let c = Number(readline.question('Nhap c:  '));

let d = (a**2 * b**2 )/c;

console.log('Ket qua: ',d);
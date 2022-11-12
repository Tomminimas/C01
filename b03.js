//Chu vi và diện tích hình tròn
let readline = require('readline-sync');
const PI = 3.14;
let r = Number(readline.question('Nhap ban kinh duong tron:  '));
Chuvi = 2 * r * PI;
Dientich = r * r * PI;

console.log('Chu vi hinh tron: ', Chuvi);
console.log('Dien tich hinh tron: ', Dientich);
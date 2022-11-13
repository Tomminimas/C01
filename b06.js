/*Đổi giờ*/
let readline = require('readline-sync');
let a = Number(readline.question('Nhap so giay:  ')); 
let hour = a / 3600;
let min = a/ 60
a = a % 60; 
console.log('So gio: ', hour);
console.log('So phut', min); 
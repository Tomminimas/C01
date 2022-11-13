/*Số nút bảng số xe*/
/*Số nút bảng số xe*/
let readline = require('readline-sync');
let a = Number(readline.question('Nhap so dau tien:  ')); 
let b = Number(readline.question('Nhap so tiep theo: ')); 
let c = Number(readline.question('Nhap so tiep theo: ')); 
let d = Number(readline.question('Nhap so tiep theo: ')); 
let e = Number(readline.question('Nhap so tiep theo: ')); 
let f = a + b + c + d + e;
let g = f % 10;
console.log('Tong so nut: ', g);
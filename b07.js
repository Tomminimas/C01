/*Khoảng cách*/
let readline = require('readline-sync');
let a = Number(readline.question('Nhap toa dọ diem x1:  ')); 
let b = Number(readline.question('Nhap toa dọ diem x2:  ')); 
let c = Number(readline.question('Nhap toa dọ diem y1:  ')); 
let d = Number(readline.question('Nhap toa dọ diem y2:  ')); 
let KhoangCach = Math.sqrt(((b-a)**2 + (d-c)**2));
console.log('Khoang cach giua 2 diem la: ', KhoangCach);
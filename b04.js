//Tính tiền
let readline = require('readline-sync');
let sl = Number(readline.question('So luong: '));
let donGia = Number(readline.question('Don gia: '));
let tien = sl * donGia;
let thue = 0.1 * tien;

console.log('Tien: ', tien);
console.log('Thue gia tri gia tang', thue);
'use sctrict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите ваше имя');

const reg = /n/ig;
// \d - digitals
// \w - words
// \s - spaces

// \D - не числа
// \W - не буквы

// i - найти что-то внезависимости от регистра
// g - пытаемся найти несколько
// m - многострочный режим

console.log(ans.search(reg));
console.log(ans.match(reg)); // ["n", indev: 1, input: "Ann", groups: undefined] or ["N", "N"];

const pass = prompt('Password');

console.log(pass.replace(/./g, "*")); // так можно зашифровать пароль например
console.log(pass.replace(/\./g, "*")); // так мы экранировали только точки

console.log('12-34-56'.replace(/-/g, ':'));
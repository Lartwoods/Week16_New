//--------------//
const year = 2023;
const regexp = /20[0-9]{2}|2100/;
console.log(regexp.test(year));

//--------------//
const text = "a b c dd efgg hi";
const regexpOne = /(\w)\1/g;
console.log(text.replace(regexpOne, ""));

//--------------//
const textTwo = "a b c dad dad abcd hi";
const regexpTwo = /\b(\w+)\b(?:\s+\1\b)+/gi;
console.log(textTwo.replace(regexpTwo, ""));

//--------------//
const textThree = "a b c dad dad dad dad efgg hi";
const regexpThree = /\b(\w+)\b(?:\s+\1\b)+/gi;
console.log(textThree.replace(regexpThree, ""));

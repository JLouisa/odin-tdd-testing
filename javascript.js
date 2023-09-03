// function capitalize(str) {
//   return str.charAt(0).toUpperCase().concat(str.slice(1, str.length));
// }
// module.exports = capitalize;

// function reverseString(revStr) {
//   return revStr.split("").reverse().join("");
// }
// module.exports = reverseString;

// function calculator(a, b) {
//   const add = () => {
//     return a + b;
//   };
//   const sub = () => {
//     return a - b;
//   };
//   const multi = () => {
//     return a * b;
//   };
//   const div = () => {
//     return a / b;
//   };
//   return { add, sub, multi, div };
// }

// module.exports = calculator;

// console.log(calculator(3, 3).add());
// console.log(calculator(3, 3).multi());
// console.log(calculator(3, 3).sub());
// console.log(calculator(3, 3).div());

// function caesarCipher(shift, str) {
//   let newWord = [];
//   let num;
//   str.split("").forEach((letter) => {
//     if (letter.charCodeAt(0) + shift > 122) {
//       num = letter.charCodeAt(0) + shift - 122 + 96;
//     } else {
//       num = letter.charCodeAt(0) + shift;
//     }
//     newWord.push(String.fromCharCode(num));
//     console.log(newWord.join(""));
//   });
//   return newWord.join("");
// }
// module.exports = caesarCipher;

function analyzeArray(arr) {
  return [
    {
      average: arr.reduce((sum, next) => sum + next, 0) / arr.length,
      min: Math.min(...arr),
      max: Math.max(...arr),
      length: arr.length,
    },
  ];
}

let array = [1, 2, 3, 4, 5];

console.log(analyzeArray(array));

module.exports = analyzeArray;

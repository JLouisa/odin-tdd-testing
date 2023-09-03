// const capitalize = require("./javascript.js");
// const reverseString = require("./javascript.js");
// const calculator = require("./javascript.js");
// const caesarCipher = require("./javascript.js");
const analyzeArray = require("./javascript.js");

// test("String start Capitalized", () => {
//   expect(capitalize("start")).toMatch("Start");
// });

// test("String start Capitalized 2", () => {
//   expect(capitalize("beginning")).toMatch("Beginning");
// });

// test("String start Capitalized 3", () => {
//   expect(capitalize("evening")).toMatch("Evening");
// });

// test("String start Capitalized 3", () => {
//   expect(capitalize("i'm going on a trip")).toMatch("I'm going on a trip");
// });

// test("Reverse String Short", () => {
//   expect(reverseString("evening")).toMatch("gnineve");
// });

// test("Reverse String Long", () => {
//   expect(reverseString("Antiestablishmentarianism")).toMatch("msinairatnemhsilbatseitnA");
// });

// test("Reverse String", () => {
//   expect(reverseString("I like the sun")).toMatch("nus eht ekil I");
// });

// test("Calculator Add", () => {
//   expect(calculator(3, 3).add()).toBe(6);
// });
// test("Calculator Add", () => {
//   expect(calculator(4, 4).add()).toBe(8);
// });

// test("Calculator Substract", () => {
//   expect(calculator(3, 3).sub()).toBe(0);
// });
// test("Calculator Substract", () => {
//   expect(calculator(4, 4).sub()).toBe(0);
// });

// test("Calculator Multiply", () => {
//   expect(calculator(3, 3).multi()).toBe(9);
// });
// test("Calculator Multiply", () => {
//   expect(calculator(4, 4).multi()).toBe(16);
// });

// test("Calculator Divide", () => {
//   expect(calculator(3, 3).div()).toBe(1);
// });
// test("Calculator Divide", () => {
//   expect(calculator(4, 4).div()).toBe(1);
// });

// test("CaesarCipher strings", () => {
//   expect(caesarCipher(1, "abcd")).toMatch("bcde");
// });

// test("CaesarCipher strings", () => {
//   expect(caesarCipher(1, "z")).toMatch("a");
// });

// test("CaesarCipher strings", () => {
//   expect(caesarCipher(1, "zakm")).toMatch("abln");
// });

// test("CaesarCipher strings", () => {
//   expect(caesarCipher(4, "wxyz")).toMatch("abcd");
// });

test("analyzeArray strings", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toMatchObject([{ average: 3, min: 1, max: 5, length: 5 }]);
});

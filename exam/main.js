"use atrict";
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Title Case a Sentence
// Write a function that takes a sentence as input and returns the sentence with the first letter of each word capitalized.

// Example:
// Input: "hello world, how are you?"
// Output: "Hello World, How Are You?"

const capitalize = function (sentence) {
  let inputArray = sentence.split(" ");

  let function2 = function (word) {
    let firstBig = word[0].toUpperCase();
    let rest = word.slice(1).toLowerCase();
    return firstBig + rest;
  };

  let firstLetter = inputArray.map(function2);
  let newArray = firstLetter.join(" ");
  return newArray;
};

// const capitalized = capitalize("hello world you need me");
// console.log(capitalized);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  * Task description: Write a method that splits an array into parts of determined size
//   * Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
//   * returns {Array}
// const chunk = (array, size) => {
//   console.log("Put your solution here");
// };
// const data = [1, 2, 3, 4, 5, 6, 7];
// console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]

const splitArray = function (array, size) {
  let pieces = [];
  for (let i = 0; i < array.length; i += size) {
    let piece = array.slice(i, i + size);
    pieces.push(piece);
  }
  return pieces;
};

// console.log(splitArray([83, 1, 39, 17], 2));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// * Task description: Write a method that returns a duplicate-free array
// * Expected Result: Duplicate-free array [1, 2, 3, 1, 2] => [1, 2, 3]
// const unique = (array) => {
//   console.log("Put your solution here");
// };
// const data = [1, 2, 1, 2, 3];
// console.log(unique(data)); // [1, 2, 3]

// data[0] === data[i]

const dublicate = function (array) {
  let function2 = (n, i) => array.indexOf(n) === i;
  let result = array.filter(function2);
  return result;
};

// console.log(dublicate([2, 2, 1, 2, 3]));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Write a JavaScript function that generates all combinations of a string.
// const combinations = (string) => {
//   console.log("Put your solution here");
// };
// let data = "dog";
// let data2 = "world";
// console.log(combinations(data));  d,do,dog,o,og,g
// console.log(combinations(data2));  w, wo, wor, worl, world, o, or, orl, orld, r, rl, rld, l, ld, d

// (0,1)(0,2)(0,3)(0,4)

const combination = function (string) {
  let data = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      data.push(string.slice(i, j));
    }
  }
  return data;
};

data = "world";
console.log(combination(data));

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Fibonacci Series
// Write a function that takes an integer n as input and returns the first n numbers in the Fibonacci series.
//
// Example:
// Input: 7
// Output: [0, 1, 1, 2, 3, 5, 8]

const fibonacci = function (n) {
  let array = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    array.push(array[i] + array[i + 1]);
  }
  return array;
};

// console.log(fibonacci(10));

// let array = [0, 1];
// let news = array.push(array[0] + array[1]);
// let next = array.push(array[1] + array[2]);
// let next2 = array.push(array[2] + array[3]);
// console.log(array);

console.log(typeOf NaN);

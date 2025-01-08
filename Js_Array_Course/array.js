// Array Destructuring

//let [a, b, c, [[str1, str2], age]] = [1, 2, 3, [["name1", "name2"], "age"]];

//console.log(a, b, c, str1, str2, age);

//Spread Operator
// const arr = ["a", "b"];

// console.log(...arr);
// const copy = [...arr];
// console.log(copy);

// Value Swapping using Destructuring

// let a = 1;
// let b = 2;
// [b, a] = [a, b];

// console.log(a, b);

// Merging two arrays using Spread Operator

// const arr1 = [1, 2, 3, ["a", "b"]];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

//The length Property

// const arr1 = [1, 2, 3];
// const arr2 = new Array(6);
// console.log(arr2);

// console.log(arr1.length);
// console.log(arr2.length);

//arr2.length = 2 ** 32; //4294967296; => RangeError: Invalid array length
//arr2.length = 2 ** 32 - 1; //4294967295

//const arr3 = new Array(-4); // RangeError: Invalid array length

// const arr = [1, 3, 5, 7, 9];

// arr.length = 10;
// console.log(arr);
// arr.length = 2;
// console.log(arr);

const cash = ["100", "200", "300", "400", "500"];

Object.defineProperty(cash, "length", { writable: false });

cash.length = 0;
console.log(cash);

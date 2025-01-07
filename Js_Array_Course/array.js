// const arr2 = new Array(5);
// console.log(arr2);
// const arr3 = new Array(1, 2, 3, 4, 5);
// console.log(arr3);

// const arr = Array.of(1, 2);
// console.log(arr);

// const arr1 = Array.from("hello");
// console.log(arr1);

// From a Set
// const arr2 = Array.from(new Set([1, 2, 3]));
// console.log(arr2);

// From a custom mapping function
// const arr3 = Array.from({ length: 5 }, (_, i) => i + 1); // [1, 2, 3, 4, 5]

// const arr2 = [...'hello'];
// console.log(arr2);

// const arr2 = Array(5)
//   .fill(0)
//   .map((_, i) => i); // [0, 1, 2, 3, 4]
// console.log(arr2);

// const arr = JSON.parse("[1, 2, 3, 4, 5]");

// console.log(arr);

const arr = Array(1, 2);
console.log(arr);

for (const element of arr) {
  console.log(element);
}

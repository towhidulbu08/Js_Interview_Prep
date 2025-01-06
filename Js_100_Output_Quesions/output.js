//Q-01:

// let a = []; //w2134e
// let b = []; //3r45re

// console.log(a == b);
// console.log(a === b);

//Q-02:
// let a = []; //w2134e
// let b = a; //w2134e

// console.log(a == b);
// console.log(a === b);

//Q-03:
// let a = [20]; //w2134e
// let b = [20]; //r5104g

// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);

//Q-04:

// let z = [1, 2, 3, 4, 5, 6, 7, 8];

// let a = { name: "Tamim" };

//console.log(...z);

//console.log(...a); // output: TypeError

//Q-05:

//console.log(typeof NaN);

//Q-06:

// const data = 10 - -10;
// const str1 = "a" + " " + "b";
// const str2 = "a" + +"b";
// console.log(str1);
// console.log(str2);
// console.log(data);

//Q-07:

// const set = new Set([1, 1, 2, 3, 3, 4]);
// const map = new Map();
// map.set(1, "apple");
// map.set(2, "apple");
// map.set(3, "apple");
// map.set(4, "apple");
// console.log(set);
// console.log(map);

//Q-08:

// let data = { name: "Tamim" };

// let a = 5;

//console.log(delete a); // Output:false

//console.warn(delete data.name);// Output:true
//console.log(data);

// console.log(delete data); // Output:false
// console.log(data);

//Q-09:

// const data = ["Peter", "Anil", "Sima"];

// const [, , c] = data;// Here Sequence Is Important

// console.log(c);

//Q-10:

//const obj = { name: "Tamim", age: 23 };

//How to get name property without dot operator

// const { age, name } = obj; // Here Sequence Is not Important

// console.log(age, name);

//Q-11: How to merge two objects

// let data = { name: "Tamim", age: 29, skill: "JS" };
// let info = { city: "Barishal", mail: "tamim@gmail.com", skill: "React" };

//data = { data, info };
//{data:{name:"Tamim",age:29,skill:"JS"},info:{city:"Barishal",mail:"tamim@gmail.com"}}

// data = { ...data, ...info };
// console.log(data);

//Q-12:
// const name = "Tamim";

// console.log(name());

//Q-13:

// const and = false || "" || null || 3 + 3; //Note: check truthy value first and return first truthy value  or last value
// const or = true && "0" && "null" && undefined; //Note: check falsy value first and return first falsy value or last value

// const combine = true && (false || 5) && (null || "a");
// // output: a

// console.log(and);
// console.log(or);
// console.log(combine);

console.log(undefined && null);

//Q-01:Hoisting

function abc() {
  console.log(a, b, c);
  const b = 12;
  let c = 20; //note: let and const are hoisted in temporal dead Zone
  var a = 10;
}

//abc();

// Temporal Dead Zone:Its a State Where Variables Are In The Scope, but They  are not yet declared

// Q-02: Explicit And Implicit Binding

var obj = {
  name: "Piyush",
  display: () => {
    console.log(this.name);
  },
};

var obj1 = {
  name: "ABC",
};

//obj.display.call(obj1);

//Q-03: Implement Caching/Memorize Function

function myMemorize(fn, context) {
  const res = {};

  return function (...args) {
    var argsCache = JSON.stringify(args);
    console.log(argsCache);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
      console.log(res);
    } else {
      return res[argsCache];
      console.log(res);
    }
  };
}

const clumsySquare = (num1, num2) => {
  for (let i = 1; i <= 100000000; i++) {
    return num1 * num2;
  }
};

const memorizedClumsyProduct = myMemorize(clumsySquare);

console.time("First Call");
console.log(memorizedClumsyProduct(9467, 7649));
console.timeEnd("First Call");

console.time("First Call");
console.log(memorizedClumsyProduct(9467, 7649));
console.timeEnd("First Call");

function a(...rest) {
  var str = JSON.stringify(rest);

  console.log(typeof str);
}

a(1, 2, 3);

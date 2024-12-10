// iterator => JavaScript mein Iterator ek special object hota hai jo collection of elements ko traverse karne ke liye use hota hai.
// Ye iterator sequence ke har ek element ko ek ek karke access karne ki suvidha deta hai.

// next() Method: ye  method { value, done } return krta hai
//1 next(): Ye method next element ko return karta hai sequence mein. Agar sequence khatam ho gaya hai to done property true ho jata hai.
//2 return(): Ye method iterator ko manually close kar deta hai. Ye optional hota hai.

let str = "hello";
let strItr = str[Symbol.iterator]();

console.log(strItr.next());
console.log(strItr.next());
console.log(strItr.next());
strItr.next(); //skip the value 'l'
console.log(strItr.next());
console.log(strItr.next());

var it1 = ["apple", "mango", ["banana", "kiwi"]];
var it2 = it1[Symbol.iterator]();

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

function ownItrfun(arr) {
  let arrNum = 0;
  return {
    next() {
      if (arrNum < arr.length) {
        return {
          value: arr[arrNum++],
          done: false,
        };
      } else {
        return {
          value: arr[arrNum],
          done: true,
        };
      }
    },
  };
}
// function call owerIterFun(arr)

let arr = [10, 20, 30, 40];
let arrItr = ownItrfun(arr);

console.log(arrItr.next());
console.log(arrItr.next());
console.log(arrItr.next());
console.log(arrItr.next());
console.log(arrItr.next());

const arr1 = ["one", "two", "three"];
const arr2 = arr1[Symbol.iterator]();

console.log(arr2); //Object [Array Itrator] {}

arr2.next(); // Skip value in array is "one"(1)

console.log(arr2.next().value); // get value => "two"
console.log(arr2.next().done); // false

let customFunction = (res) => {
  let inirialvalue = 0;
  return {
    next() {
      return {
        value: res[inirialvalue++],
        done: inirialvalue < res.length + 1 ? false : true,
      };
    },
  };
};

let arr3 = ["first", "second", "third", "fourth", "five"];
let arr4 = customFunction(arr3);

console.log(arr4.next());
console.log(arr4.next());
console.log(arr4.next());
console.log(arr4.next());
console.log(arr4.next());
console.log(arr4.next());

let str1 = "Mujahid-Gurjar";
let str2 = str1[Symbol.iterator]();

let reponse = str2.next();

// while (!reponse.done) {
//     console.log(reponse.value);
//     reponse = str2.next();
// }

for (let i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}

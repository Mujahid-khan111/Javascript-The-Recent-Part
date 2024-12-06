// Destructuring is done based on the index inside the array.
// JavaScript mein "destructuring" ek feature hai jo arrays aur objects se values ko extract (bahar nikalna) karne mein madad karta hai. Iska mtlb hai ki aap arrays ya objects se specific values ko alag karke variables mein store kar sakte hain, jo ki code ko compact aur readable banata hai.

// Destructuring JavaScript ka ek powerful feature hai jo arrays aur objects ke values ko easily
// extract karne aur unhe variables mein assign karne ke liye use hota hai. Yeh syntax ko simple aur
// code ko readable banata hai.

// Normal Example
let arr = [1, 2];
let a = arr[0];
let b = arr[1];

console.log(a); // 1
console.log(b); // 2

// right
let arr1 = [1, 2, 3, "mujahid"];
let [c, d, e, f] = arr1;

console.log(c); // 1
console.log(d); // 2
console.log(e); // 3
console.log(f); // mujahid

const fruits = ["apple", "banana", "cherry"];
const [first, second, third] = fruits;

// Skipping Values: Aap unwanted values ko skip kar sakte ho:
// const [first, , third] = fruits;

console.log(first); //apple
console.log(second); // banana
console.log(third); // cherry

// array
// default value:
// Agar koi value undefined ho, to hm default value set kar sakte hai:

const numbers = [1];
const [n, n1 = 2] = numbers;

console.log(n);
console.log(n1);

// String ke shat

let str = "Mujahid";
let [i, j, k, l, m, s, r] = str;

console.log([i, r]); //[ 'M', 'd' ]

let o = 10;
let p = 20;
let q = o;

[o, p] = [p, o];

console.log(o); // 20
console.log(p); // 10

//  Spread aur Rest operators modern JavaScript (ES6) ke features hain jo ... (triple dots) ka use
//  karte hain. Yeh dono operators arrays, objects, aur function arguments ke saath kaam karte hain,
//  lekin unka kaam alag-alag hota hai:

// 1. Spread Operator (...)
// Spread operator existing arrays aur objects ko expand (phailana) karne ke liye use hota hai. Yeh
// values ko unpack karta hai aur unhe nayi jagah pe copy ya combine karne ki facility deta hai.

// (i) Array Expansion
// Array ki values ko expand karke nayi jagah use karna.

const numbers = [1, 2, 3];
const newnumbers = [...numbers, 4, 5];

console.log(newnumbers);

// (2)Object Expansion
// Object ki properties ko expand karke ek naya object banane ke liye.

const person = { name: "mujahid", age: 20 };
const updateperson = { ...person, city: "India" };

console.log(updateperson);

// 2=> Rest operator
// Rest operator multiple arguments ko ek array mein collect karta hai.

// Rest operator function arguments ya arrays/objects ke bache hue elements ko collect karne ke
// liye use hota hai. Yeh ek compact format mein values ko ek array ya object ke roop mein pack karta
// hai.

function add(...number) {
  return number.reduce((sum, num) => sum + num, 0);
}

console.log(add(1, 2, 3, 4, 5));

const [first, second, ...Rest] = [10, 20, 30, 40, 50];

console.log(first);
console.log(second);
console.log(Rest);

// Obejct Destructuring
// Object ke remaining properties ko collect karna.

const persons = {
  name: "mujahid-Gurjar",
  age: 20,
  city: "Jodhpur",
  country: "india",
};
const { name, ...details } = persons;

console.log(name);
console.log(details);

// Spread: Elements ko "phailaata" hai (Expand karta hai).
// Rest: Elements ko "jama karta" hai (Collect karta hai).

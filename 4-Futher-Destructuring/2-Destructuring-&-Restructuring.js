// Destructuring aur Restructuring JavaScript mein:

// Destructuring
// "Destructuring" ek tarika hai jisse aap ek array ya object ke values ko alag-alag variables mein assign kar sakte hain. Yeh aapko code
//  likhne mein flexibility aur readability provide karta hai.

// Array Destructuring:

const num = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = num;

console.log(a);
console.log(b);
console.log(c);

// Object Destrucring

const user = { name: "mujahid", age: 20, city: "India" };
const { name, age } = user;
console.log(name); // mujahid
console.log(age); //20

// Restructuring (Rest/Spread Operators):
// Yeh concept array aur object manipulation mein madad karta hai.

// Rest Operator (...):
// Rest operator ek array mein bache hue elements ko ek variable mein store karta hai.

const num1 = [1, 2, 3, 4, 5];
const [first, second, ...Rest] = num1;

console.log(first);
console.log(second);
console.log(Rest);

// Spread Operator (...):
// Spread operator array ya object ke elements ko spread karke kisi aur array ya object mein include karne mein istemal hota hai.

const arr = [1, 2, 3];
const arr1 = [4, 5, 6];

const combinatArray = [...arr, ...arr1];

console.log(combinatArray);


// comma Operation
// Comma operator ka use tab hota hai jab aapko ek line mein multiple expressions ko execute karna
// ho, lekin sirf aakhri expression ka value chahiye ho.

let arr = [1, 2, 3, 4, 5];
let [a, , , , b] = arr;

console.log(a); //1
console.log(b); //5

let arr1 = [1, 2, 3, "mujahid", 4, 5, "Gurjar"];
let [, , , c, , , d] = arr1;
console.log(c, d); // mujahid Gurjar



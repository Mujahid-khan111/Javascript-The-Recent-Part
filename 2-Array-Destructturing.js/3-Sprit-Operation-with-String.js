// Spread operator string "mujahid" ke har character ko separately expand karta hai, jaise
// ek array ke elements ko karta hai.

const str = "mujahid";
console.log(...str);
// console.log(typeof str);

const strr = "mujahid";
const character = [...str];

// console.log(character);
// console.log(typeof character);

const str1 = "mujahidGurjar";
const [a, b, ...c] = str1;
console.log(c);
console.log([...str1].join(""));
// console.log(typeof str1);

const Speard = "hello world";
console.log(Speard); // normal
console.log(...Speard); //Speard Operation -- it will sperad each latter.
console.log([...Speard]); //it will return Array in with strings
console.log([...Speard].join(" ")); //hello world
console.log([...Speard].push()); //hello world

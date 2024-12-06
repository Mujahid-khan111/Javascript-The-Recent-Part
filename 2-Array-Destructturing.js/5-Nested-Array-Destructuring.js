// Nested Array Destructuring JavaScript mein ek technique hai jo arrays ke andar nested arrays (arrays within arrays)
// ke elements ko extract karne ke liye use hoti hai. Isme destructuring syntax
// ([]) ka use karke ek array ke andar ke elements ko as variables assign karte hain.

// Syntax:
// const array = [[a, b], [c, d]];
// const [[var1, var2], [var3, var4]] = array;

// Yahaan var1, var2, var3, aur var4 nested arrays ke respective values ko hold karenge.

const number = [
  [1, 2],
  [3, 4],
];

const [[a, b], [c, d]] = number;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// Using DEfault Value
// Agar nested array ke elements undefined ho, toh default values assign ki ja sakti hain:

const numbers = [[1], [3, 4]];
const [[e, f = 0], [g, h]] = numbers;
// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);

// Jab arrays ke andar aur deeply nested arrays ho, tab bhi destructuring ka use kar sakte ho:

const data = [1, [2, [3, 4]]];

const [first, [second, [third, four]]] = data;

console.log(first); //1
console.log(second); //2
console.log(third); //3
console.log(four); //4

// A group of arrays

const group = [
  [
    ["mujahid", "khan"],
    ["mohammed", "gurjar"],
  ],
  [
    ["burhan", "kilji"],
    ["mikail", "Pramanent"],
  ],
];

const [firstgroup, secondgroup] = group;
const [[mujahid, khan], [mohammed, gurjar, Me= "me nhi hu"]] = firstgroup;
const [[,burhan, kilji], [mikail, Pramanent ,fake = "defaultValue"]] = secondgroup;

console.log(mujahid);
console.log(khan);
console.log(mohammed);
console.log(gurjar);
console.log(burhan);
console.log(kilji);
console.log(mikail);
console.log(Pramanent);
console.log(fake);
console.log(Me);

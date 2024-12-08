// Nested Object & Array Destructuring ka matlab hai ki JavaScript me hum objects ke andar ke
// objects aur arrays ke andar ke elements ko ek hi step me nikal sakte hain aur variables me assign
// kar sakte hain. Ye feature complex data structures ke saath kaam karne ko easy aur clean banata
// hai

const data = {
  user: {
    name: "Ahmed",
    hobbies: ["reading", "traveling", "gaming"],
  },
  adderess: {
    city: "Deli",
    picode: 110001,
  },
};

// Desteucturing nested object and array

const {
  user: {
    name,
    hobbies: [hobby1, hobby2],
  },
  adderess: { city, picode },
} = data;

console.log(name);
console.log(hobby1);
console.log(hobby2);
console.log(city);
console.log(picode);
// console.log();

const object = {
  a: 1,
  b: [500, 500],
  c: 3,
};

// Desteucturing nested object and array
const {
  a,
  b: [monny, pesha],
  c
} = object;
console.log(a);
console.log({ monny: pesha });
console.log(c);

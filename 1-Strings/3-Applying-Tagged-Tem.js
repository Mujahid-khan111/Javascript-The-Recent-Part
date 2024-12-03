// JavaScript ke tagged template ko samjhaate hain

const name = "mujahid";
const age = 20;

const result = `my name is ${name} and I am ${age} old`;

console.log(result);

// // Tagged Template Example
// // Ek function banaya jo tag ki tarah kaam karega

// // Tagged Template me hum reduce ka use isliye
// // karte hain taki saari strings aur expressions ko combine karke ek final string bana saken.

function meraTag(strings, ...value) {
  return strings.reduce((result, strings, i) => {
    return `${result} ${strings} ${value[i] || ""}`;
  }, "");
}

let naam = "mujahid";
let ages = 20;

// Tagged Template ka use
let message = meraTag`mera naam ${naam} hai our meri umr ${ages} saal he.`;

console.log(message);

// // Example 2

function shot(mujju, ...value) {
    return mujju.reduce((results, mujju, A) => {
        return `${results} ${mujju} ${(value[A] || '').toUpperCase()}`;
    },'');
}

let n = "Hasnain";
let messagess = shot`welcome, my name is ${n} `;

console.log(messagess);

// // Example 3

// function meraTag(strings, ...values) {
//     return strings.reduce((result, string, i) => {
//         // result mein hum final string ko build karte hain
//         // string current string part hai aur values[i] variable value hai
//         return `${result}${string}${values[i] || ''}`;
//     }, '');
// }

// let nn= "raju";
// let mess = meraTag `Welcom mera nam ${nn}`

// console.log(mess);

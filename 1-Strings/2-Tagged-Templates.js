// Tagged-Templates
// ye Hme kisi function ke shat string ko use lene  or jodne me kam aata he

function myTag(strings, ...value) {
  return strings[0] + value[0].toUpperCase() + strings[1];
}

let name = "mujahid";
let result = myTag`hello, ${name}!`;

console.log(result);

// Isme:
// strings me ["Hello, ", "!"] parts hain.
// values me tumhara dynamic part, yaani name.
// Tag ka kaam yaha ye tha ki ${name} ko capital letters me convert kare.

// bacis Examlple
// var amount = 12.3;
// var msg =
//     formatCurrency`
//       The total for your
//       order is ${amount}`

//   console.log(msg);
//   The total for your
//   order is $12.3

// Tagged Templates use Syntext

function Tagged(strings, ...daynamicpart) {
  return strings[0] + daynamicpart[0].toUpperCase() + strings[1];
}

let names = "mujahid";
let results = Tagged`Hello My name is , ${names}!`;

console.log(results);

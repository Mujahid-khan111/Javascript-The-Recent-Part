//  Named Arguments ka matlab hai ki JavaScript me arguments ko unke naam ke
//  sath pass karte hai, taki kis value ka kya role hai ye clearly samajh aaye.
//  Iska use mostly object destructuring ke sath kiya jata hai.

// function intro({ name, age, city }) {
//     console.log(`My name ${name}, I am ${age}, and I live in ${city}.`);
// }
// // Function call with named arguments:

// intro({ name: "mujahid", age: 20, city: "Dehli" });


function fn() {
  console.log(arguments);
  console.log(arguments[0]);
  console.log(arguments.length);

  if (arguments.length === 0) {
    console.log("No argument Passed");
  } else {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    console.log(sum); // sum ko dispaly kreg
  }
}

// fn(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// fn(1, 2, 3, 4, 5, 6,);
fn();

// 10 arguments pass huhe।
// arguments object me {0: 1, 1: 2, ..., 9: 10} hoga
// 3 argument (arguments[2]) = 3 hoga
// sbhi arguments ka sum nikala jayga: 1 + 2 + 3 + ... + 10 = 55

function ExampleFunction() {
  console.log(arguments); // all argument ko sho up krega
  console.log(arguments[1]); // pehla argument
  console.log(arguments.length); // argument ki snkhya
}

ExampleFunction("m", "u", "j", "a", "h", "i", "d");

// Rest usees

function ExampleFunction1(...args) {
  console.log(args);
  console.log(args[2]);
  console.log(args.length);
}

ExampleFunction1(1, 2, "I am 3 argument", 4);

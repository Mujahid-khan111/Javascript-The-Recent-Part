// Object-Destructuring
// Destructuring happens based on the keys inside the object
const obj = {
  name: "mujahid",
  age: 21,
  Cource: "BCA 2nd Year",
};


const { name, age, Cource } = obj;
console.log(name);
console.log(`My name is ${name} My age is ${age} My cource is ${Cource}`);


const Object = {
  names: "Burhan",
  ages: 25,
  study: "12th pass out",
  livin: "jodhpur Rajsthan",
};

const { names, ages, study, livin } = Object;
console.log(Object.names);
console.log(
  `My name is${names} and My age is => ${ages} I am ${study} Frome ${livin}`
);

// Object Default Assignment ka matlab hai ki jab hum JavaScript me object se value nikalte hain
// (destructure karte hain), aur agar koi value missing ho ya undefined ho, to hum uske liye ek default
// value de sakte hain. Matlab agar object me property na ho, to wo default value pick kar lega.

const user = {
  name: "Mohammed",
};

const { name, age = 17 } = user;

console.log(name); //Mohammed
console.log(age); // 17 (kyunki age missing thi, to default value use hui)

// Example => 2
const obj = { names: "mujahid", ages: 20 };

let { names, ages, City = "Jodhpur" } = obj;
console.log(`My name is ${names} My age is ${ages} I am from ${City}`);
console.log(obj);


// Object-Assignment-Destructuring
// Object-Assignment-Destructuring javascritp ki ek technicque he jo hme Object ki Propertiecs ko
// directly variable me assign krne ki Facility deta he esse code small or
// clean or smjne me aashani hoti he
// Direct Access: Properties को directly access करने के लिए अलग-अलग variables में assign कर सकते हैं।
// Syntex
// const { key1, key2 } = object;

// Example

const student = {
  name: "mujahid",
  age: 20,
  course: "BCA",
};

const { name, age, course } = student;

console.log(name); //=> mujahid
console.log(age); //=>20
console.log(course); // => BCA

const details = {
  names: "mujahid",
  ages: 20,
  Email: "khanmujahid7003@gmail.com",
  mobileNo: 9636443841,
};

const { names, ages, Email, mobileNo, adderess = "5th Road idgha" } = details;

console.log(names, Email); //mujahid khanmujahid7003@gmail.com
console.log(age, mobileNo); //20 9636443841
console.log(adderess); //5th Road idgha

const obj = { Fname: "Mujahid", Lname: "Gurjar", study: "BCA 2nd Year" };
let { Fname, ...study } = obj;

console.log(study); //{ Lname: 'Gurjar', study: 'BCA 2nd Year' }

console.log(Fname); //Mujahid

var a = Symbol('a');
var b =a ;
var bo = {
  [a]:1,
  [b]:2
}
console.log(bo);


//Regular Expression =>
// Regular expression, ya regex, ek powerful tool hai jo strings ko search, match,
// aur manipulate karne ke liye istemal hota hai. Ye ek sequence of characters
// hai jo ek search pattern ko define karta hai.

// Key Features of Regular Expressions:

// 1=>  Pattern Matching:
// RegEx ka use karke aap kisi bhi string me specific patterns ko match kar sakte hain, jaise
// "hello", "123", ya "mujahidkhan@gmail.com@xyz.com".

// 2=> Search and Replace:
// Text me kisi pattern ko dhundhkar usse replace kar sakte hain.

// 3=> Validation:
// RegEx ka use input validation ke liye hota hai, jaise email, phone number, ya password check
// karna.

// Syntax:
// Regular Expression ko / se enclose karte hain.
// Example: /pattern/flags

// Pattern:
// 1=> Text ko match karne ka rule (e.g., abc, [0-9], \d).
// 2=> Flags (optional):
// Behavior control karte hain (e.g., g, i, m).

// Pattern Match (Search):

const str = "Hello world!";
const regex = /world/;
console.log(regex.test(str)); // true

// Serch and replace

const str1 = "Apple are blue.";
const reg = /blue/;
const newStr = str1.replace(reg, "red");
console.log(newStr); //Apple are red.

// Validate Email:

const email = "khanmujahid7003@gmail.com";
const regex1 = /[a-z0-9._%+-]+@[a-z0-9._%+-]+\.[a-z0-9._%+-]/;
console.log(regex1.test(email));

const char = "aa";
const regex2 = /a{2}/;
console.log(regex2.test(char));

const charcter = "abbbc";
const regex3 = /ab+c/;
console.log(regex3.test(charcter));

const charcters = "a";
const regex4 = /[aeiou]/;
console.log(regex4.test(charcters));

let pat1 = /[a-z]/i; // i is ignore cases and maching all alfabate small or capital
let pass1 = "Aaf";
console.log(pat1.exec(pass1));

let pat2 = /[a-z]/;
let pass2 = "67878A";
console.log(pat2.exec(pass2)); // answer is null beacuse pat2 is check only for small later

let pat3 = /[a-z]/i;
let pass3 = "67878A";
console.log(pat3.exec(pass3)); //answer is true because capitaliez "A" is diffine in index number 5

// 1. i Flag (Case-Insensitive Search):
// ye flag regular expression ko case-insensitive bna deta hei
// iska mtlb he ki ye  uppercase OR lowercase dono letters ko match krega

// Example:
// /javascript/i JavaScript, JAVASCRIPT, या javascript को match करेगा।

// 2=> g Flag (Global Search):
// ye flag btata hai li search pure string  me ki jaygi , na ki keval pehli match pr ruk jaygi
// Default behavior ye hota he ki pehli match ke bad process ruk ajata he lekin g flag ki wajah se
// share matches return honge
// Example:
// /javascript/g पूरे string में "javascript" को ढूंढेगा।

let pat4 = "JAVASCRIPT is  a best and populer language";
let pass = pat4.match(/javascript/gi);
console.log(pass);

// search() Method in Regular Expression
let name = "My name is  mujahid gurjar";
let ser = name.search(/mujahid/i); //  search Method return index no "mujahid" is starting index no is  12
console.log(ser);

//  replace() Method in regular Expression
let change = "Welcome my page";
let rep = change.replace(/page/i, "Javascript codes");
console.log(rep);

// Javascript regex password patterns
let password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*\])(?=.[8,])/g;
let mypass = "khanMujaid@12345";
let check = password.test(mypass);
if (check == true) {
  console.log("Password is very strong");
}else{
    console.log("NO very bad password");
    
}

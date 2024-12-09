// Find
// ye method array me pehla Items dhunta he jo condition puri krta he
// agr koiitems nhi ho to ye undifine returnd krta he

// 1=>

const number = [10, 20, 30, 40];
const result = number.find((num) => num > 25);

console.log(result);
// 2=>
const array = [5, 12, 8, 130, 44];
const founding = array.find((element) => element > 10);
console.log(founding);

// findIndex
// ye method array me pehle items ka index deta he jo condition puri krta he
// agr koi items nhi he to -1 return krtahe

const number1 = [10, 20, 30, 40];
const result1 = number1.findIndex((num) => num > 10);
console.log(result1);


// includes
// ye method vheck  krta hei ki array me koi iten nojud he ya nhi!
// Output: true (agr item hei to) or false (agr item nhi hei to)।

const fruts = ["apple", "mango", "banana"];
console.log(fruts.includes("mango"));
console.log(fruts.includes("grapes"));

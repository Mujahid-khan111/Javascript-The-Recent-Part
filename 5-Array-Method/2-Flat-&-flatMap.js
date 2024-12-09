// flat aur flatMap JavaScript Array ke methods hain, jo ke arrays ko manipulate karne mein madad karte hain.

// flat method ka istemal multi-dimensional (nested) arrays ko ek level ke andar flatten karne ke liye hota hai. Yani agar aapke paas ek array hai jisme doosre arrays bhi hain,
//  aur aap chahte hain ki wo sabhi values ek hi level pe aa jaye, to aap flat ka istemal kar sakte hain.

// flat Method
// JavaScript me flat ek array method hei, jo multi-dimensional (nested) arrays ko flatten krne ke lie use ki jati he!
//  iska mtlab hei ki nested arrays ko ek single array bdl deta hei

const arr = ["mujahid", ["adnan", ["suleman", ["sahil"]]]];
const arr1 = arr.flat();
console.log(arr1);

// Single level Falttening(Default)

const arr2 = [1, 2, [3, 4], [5, 6]];
console.log(arr2.flat());

// Multi-Level Flattening

const arr3 = [1, [2, 3, [4, 5]]];
console.log(arr3.flat());

// flatMap method ka istemal ek array ko transform karne ke liye hota hai, aur uske baad use flatten kar deta hai.
// Isme aap ek function pass karte hain jo har element ko transform karega,
// aur phir ye transformed values ko ek hi level pe laake ek naya array banata hai.

const number = [1, [2], [3], 4];
const dubleAndFlattened = number.flatMap((num) => [num * 2]);
console.log(dubleAndFlattened); // [2,4,6,8]


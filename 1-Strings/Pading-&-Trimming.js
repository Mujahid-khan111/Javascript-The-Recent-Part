// Padding ka matlab hai kisi data ke aage ya peeche extra characters ya spaces add karna,
// taa ki uska size ya format ek certain standard ko match kare.

// Examples:
// .Start Padiding:
// agr ek string "123"hai  our humain usko length 5 krna he, to
// hum spaces ya zeros add kar skte hain:

const str = " hello ";

const padStart = str.padStart(5); // Hello
console.log(padStart);

const padStart1 = str.padStart(8);
console.log(padStart1); //

// Trimming:
// Trimming ka matlab hai kisi data ke aage ya peeche se unwanted characters ya spaces ko remove
// karna.

const padStart2 = str.trimStart();
console.log(padStart2);

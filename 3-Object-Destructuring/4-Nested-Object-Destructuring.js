// Nested Object Destructuring ka matlab hai ki jab ek object ke andar aur bhi objects ho, to hum
// unki values ko directly nikal ke variables me store kar sakte hain. Isse code chhota aur simple
// ho jata hai.

const user = {
  name: "Ahmed",
  address: {
    city: "Jodhpur",
    pincode: 342003,
  },
};

// Nested destructuring
const {
  name,
  address: { city, pincode },
} = user;

console.log(name); //Ahmed
console.log(city); //jodhpur
console.log(pincode); //342003

//ahan address ek nested object tha, jo humne destructure karke city aur pincode ko alag
//variables me assign kiya.

const order = {
  customer: {
    name: "mujahid",
    contact: { Phone: "9636443842", Email: "khanmujahid7003@gmail.com" },
  },
};

// Directly Extract phone and email

const {
  customer: {
    contact: { Phone, Email },
  },
} = order;

console.log(Phone);
console.log(Email);

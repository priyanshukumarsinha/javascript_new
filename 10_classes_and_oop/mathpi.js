const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter)

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

// And hence we cannot change value of Math.PI

// Now can we change description for any of our own Objects
// Yes we can

const user = {
    name : "PK",
    email : "pk@gmail.com",
    password : 123
}

console.log(Object.getOwnPropertyDescriptor(user, "password"))

// {   
//     value: 123, 
//     writable: true, 
//     enumerable: true, 
//     configurable: true 
// }

// Now i want to change the writable and enumerable part 

Object.defineProperty(user, "password", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user, "password"))

// { 
//     value: 123, 
//     writable: false, 
//     enumerable: false, 
//     configurable: true 
// }
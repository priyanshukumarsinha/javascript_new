// Primitive

// 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const sccoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID)

const bigNumber = 983537455646n


// Reference (Non - Primitive)

// Array, Objects, Functions

const heros = ["shaktimaan", "naagraj", "doga"]
let myObj = {
    name : "pk",
    age : 21,
}

const myFunction = function(){
    console.log("Hello World");
}

console.table([typeof score, typeof sccoreValue, typeof isLoggedIn, typeof outsideTemp, typeof userEmail, typeof id, typeof anotherID, typeof bigNumber, typeof heros, typeof myObj, typeof myFunction])

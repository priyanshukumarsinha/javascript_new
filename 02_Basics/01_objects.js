// singleton
// to make singleton objects, we use Object.create (constructor method)

// Object Literals

const mySym = Symbol("key1") // to use symbol in an object we first need to define it

const jsUser = {
    name : "PK",
    "full name" : "Priyanshu Kumar Sinha",
    [mySym]: "mykey1", //syntax to use symbol in an object
    age : 69,
    location : "Bengaluru",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
}

// to access
// console.log(jsUser.name);
// console.log(jsUser["name"]);

// console.log(jsUser["full name"]);
// console.log(typeof jsUser[mySym])

// HOW to change values in an object

jsUser.age = 96
// console.log(jsUser)

// we can also freeze the Object i.e stop user from changing values
// Object.freeze(jsUser) // This won't throw any error but won't change anything
jsUser.age = 104
// console.log(jsUser)


// How to add elements in an Object + Functions in an Object
jsUser.greeting = function(){
    return "Hello JS User"
}

jsUser.greeting2 = function(){
    return `Hello ${this.name}` //to refer the same object we can use this keyword instead of the objects name
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting())
console.log(jsUser.greeting2())
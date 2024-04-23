let myName = "hitesh     "
let myDrink = "chai    "

Object.prototype.truelength = function(){
    return this.trim().length
}

console.log(myName.truelength())


// what i want here is to make a method which can give truelength of the string (i.e myName.trim().length)

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all Objects`)
}

heroPower.hitesh();


// Inheritance

const User = {
    username : "PK",
    password : "pk"
}

const Teacher = {
    subject : "Physics"
}

const TeachingSupport = {
    isAvailable : false
}

// to share the data in User with teacher, we use __proto__ keyword
Teacher.__proto__ = User
// console.log(Teacher)
// console.log(Teacher.__proto__)


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)
// console.log(Object.getPrototypeOf(TeachingSupport))


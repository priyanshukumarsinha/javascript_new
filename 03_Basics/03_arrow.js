const user = {
    username : "PK",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to user`)
        console.log(this)

    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = "PK"
//     console.log(this)
//     console.log(this.username) //undefined
// }

// chai()

// const chai = function(){
//     let username = "PK"
//     console.log(this)
// }


// Arrow Functions
const chai = () => {
    let username = "PK"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return // we can also define it as
// const addTwo = (num1, num2) => (num1 + num2)

// if we want to return an object
const addTwo = (num1, num2) => ({username : "PK"})

console.log(addTwo(5,6))

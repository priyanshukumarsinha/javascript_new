const name = "pk"
const repoCount = 50

// console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("GTA-VI")

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)

// console.log(gameName.toLowerCase()) //original string doesn't change

// console.log(gameName.charAt(2))

// console.log(gameName.indexOf('T'))

const newString = gameName.substring(0, 3)
// console.log(newString)

const anotherString = gameName.slice(-2, 5)
// console.log(anotherString)

const newStringOne = "     pk           "
// console.log(newStringOne.trim())

const url = "https://github.com/Priyanshu%20Kumar"
// console.log(url.replace('%20', '-'))
// console.log(url.includes('Priyanshu'))
// console.log(url.includes('Pratik'))

console.log(gameName.split('-'))


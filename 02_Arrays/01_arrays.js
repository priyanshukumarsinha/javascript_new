// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktimaan", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1])

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(-1) // pushes -1 in front
// myArr.shift() // deletes first element

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof newArr)

// slice, splice

// console.log("A ", myArr)             // A  [ 0, 1, 2, 3, 4, 5 ]
// const myn1 = myArr.slice(1, 3)       
// console.log(myn1)                    // [ 1, 2 ]
// console.log("B ", myArr)             // B  [ 0, 1, 2, 3, 4, 5 ]


console.log("A ", myArr)                // A  [ 0, 1, 2, 3, 4, 5 ]
const myn2 = myArr.splice(1, 3)         
console.log(myn2)                       // [ 1, 2, 3 ]
console.log("B ", myArr)                // B  [ 0, 4, 5 ]




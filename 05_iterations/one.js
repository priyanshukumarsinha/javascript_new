// for
// while loop
// do - while loop
// Nested loop

// for - of loop

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
}

const str = "Hello World!"
for (const letter of str){
    // console.log(letter)
}

// Maps
// same as objects // remembers position // has unique elements 
// maps are iteratable but objects are not

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map)
for (const key of map) {
    // console.log(key)
}

// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]

for (const [key, value] of map) {
    // console.log(key + ' :- ', value)
}



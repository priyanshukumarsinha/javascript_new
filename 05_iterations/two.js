const myObject = {
    'js' : "javascript",
    'py' : "python",
    'cpp' : "C++",
    'java' : 'java',
}

for (const keys in myObject) {
    // console.log(keys)
}

const programming = ["js", "py", "java", "cpp", "swift", "c", "ruby"]
for (const key in programming) {
    // console.log(programming[key])
}

// programming.forEach(function (item){
//     console.log(item)
// })

// programming.forEach( (item) => {
//     console.log(item);
// })

// programming.forEach( (item) => console.log(item))

// function printme(item){
//     console.log(item)
// }

// programming.forEach(printme)

// programming.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })
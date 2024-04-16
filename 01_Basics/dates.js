//  Dates

let myDate = new Date()
// console.log(myDate.toString())           // 2024-04-16T00:25:40.812Z
// console.log(myDate.toDateString())       // Tue Apr 16 2024 00:26:10 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())       // Tue Apr 16 2024
// console.log(myDate.toISOString())        // 2024-04-16T00:27:24.546Z
// console.log(myDate.toJSON())             // 2024-04-16T00:28:15.506Z
// console.log(myDate.toLocaleString())     // 4/16/2024, 12:28:43 AM
// console.log(myDate.toLocaleTimeString()) // 12:29:01 AM
// console.log(myDate.toUTCString())        // Tue, 16 Apr 2024 00:29:21 GMT
// console.log(myDate.toTimeString())       // 00:29:47 GMT+0000 (Coordinated Universal Time)


// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")

// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())


// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth())
// console.log(newDate.getDay())

console.log(`${newDate.getDate()}/${newDate.getMonth()}/${newDate.getYear()}`)

console.log(newDate.toLocaleString('default', {
    weekday : "narrow",
}))











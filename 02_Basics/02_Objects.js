// singleton
// to make singleton objects, we use Object.create (constructor method)

// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

// Object Nesting
const regularUser = {
    email : "some@gmail.com",
    fullname : {
        username : {
            firstname : "PK",
            lastname : "Sinha",
        }
    }
}

// console.log(regularUser.fullname.username.lastname)

// How to merge two Objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

// const obj4 = {...obj1, ...obj2}
// console.log(obj4)


// console.log(Object.keys(tinderUser))            // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser))          // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser))         // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("name"))


const course = {
    coursename : "Full Stack Development",
    price : 999,
    courseInstructor : "PK",
}

// console.log(course.courseInstructor)
// Other way of doing this is,

// const {courseInstructor} = course
// console.log(courseInstructor)
// and we can make it even more useful by changing the variable name courseInstructor to just instructor

// const {courseInstructor : instructor} = course
// console.log(instructor)

// This is called Object Destructuring

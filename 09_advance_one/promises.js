// creating a Promise // Promise is an Object
const promiseOne = new Promise( function(resolve, reject){
    // Promises are used to perform Asynchronous Operations
    // They are also used in DB Calls, cyptography, and network

    setTimeout(function(){
        // we need to join promise and resolve so that we can use .then
        resolve(); // this does it
        console.log("Async Task is complete");
    }, 1000)
} )

promiseOne.then( function(){
    console.log("Promise One Complete");
})


// We can also do it without declaration
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2 Complete");
        resolve(); //here also we need to resolve it so that .then() part can work
    }, 1000)
}).then(function(){
    console.log("Promise Two Complete")
})

// We know .then gets the returned values of promise, but HOW?
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 3 Complete");
        resolve({username : "PK", college : "DSCE, Bangalore"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


// Now lets see the use of reject
const promiseFour = new Promise(function(resolve, reject){
    // reject is triggered, if any error occurs during promise
    const error = false
    if(!error){
        setTimeout(function(){
            console.log("Async Task 4 Complete");
            resolve({username : "PK", college : "DSCE, Bangalore"});
        }, 1000);
    }
    else{
        reject("ERROR : Something Went Wrong") // now since we have used reject here, we need to use .catch() method 
    }
})

promiseFour.then( (user) => {
    console.log(user);
    return user.username // This will return the username value to the next .then() method
    //this is called chaining
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("The Promise is either Resolved or Rejected");
})

// Now let us use async and await
const promiseFive = new Promise(function(resolve, reject){
    const error = true
    if(!error){
        setTimeout(function(){
            console.log("Async Task 5 Complete");
            resolve({username : "PK", password : "9835376997"});
        }, 1000);
    }
    else{
        reject("ERROR : JS Went Wrong")
    }
})

async function consumePromiseFive(){
    // to handle errors (reject) here, we need to use try - catch
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() //converting the response to JSON takes some time, therefore we need to await it too
//         console.log(data)
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();

// now, how to do it with .then() and .catch() methods
fetch('https://api.github.com/users/priyanshukumarsinha').then((response) =>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((error) => {
    console.log(error);
})
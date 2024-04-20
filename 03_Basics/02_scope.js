let a = 300

if (true) {
    let a = 10
    const b = 20
    // var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c) //This gives output // which creates problems

//Therefore we should never use var

// console.log(a)

function one(){
    const username = "PK"

    function two() {
        const website = "youtube"
        console.log(username)
    }

    // console.log(website)
    two()
}

add1(5) // This Works
function add1(num){
    return num+1
}



// add2(6) This will give error as add2 is treated as a variable

const add2 = function (num){
    return num+2
}

// add2(6)
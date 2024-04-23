const user = {
    username : "PK",
    loginCount : 5,
    signedIn : true,
    getUserDetails : function(){
        return this.username;
    }
}

function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`Welcome, ${this.username}`);
    };

    return this  // returns an object
}

const userOne = new User("PK", 9, true); //new creates a new instance of User
const userTwo = new User("Priyanshu", 22, false);

console.log(userOne.constructor)
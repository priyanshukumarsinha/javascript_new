class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
    static createId(){
        return 123;
    }
}

const userOne = new User("PK");
userOne.logMe();
// console.log(userOne.createId())
// console.log(userOne.createId())
// console.log(userOne.createId())
// This way user can create id many times which can be difficult to handle,
// Therefore we use static keyword, to restrict its usage
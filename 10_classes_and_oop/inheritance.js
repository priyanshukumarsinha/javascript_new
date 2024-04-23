class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username); //previously we used to do it by passing this keyword with .call() method
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`New Course was added by : ${this.username}`);
    }
}

const userOne = new User('PK');
const teacherOne = new Teacher('PKs', 'pk@pk.pk', 123);

teacherOne.logMe();
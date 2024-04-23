// after ES6, Now we have this class keyword to directly use classes

class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUserName(){
        return this.username.toUpperCase();
    }
}


const userOne = new User('pk', 'pk@pk.pk')
console.log(userOne)
console.log(userOne.encryptPassword())
console.log(userOne.changeUserName())

// Behind The Scenes, this happens

// function User(username, password){
//     this.username = username;
//     this.password = password;
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`;
// }

// User.prototype.changeUserName = function(){
//     return this.username.toUpperCase();
// }

// This Works same as the above



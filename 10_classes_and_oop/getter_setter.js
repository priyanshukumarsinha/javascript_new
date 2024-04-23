class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `${this._password.toUpperCase()}hoho`
    }

    set password(value){
        this._password = value
    }

}

const userOne = new User('pk@gmail.com', '123abc')

console.log(userOne.password)


// earlier we used to do it by using defineProperty
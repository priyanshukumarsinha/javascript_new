function createUser(username, email, password){
    setUserName.call(this, username); // The .call() method is used to call the function without loosing its Execution Context
    this.email = email;
    this.password = password;
}

function setUserName(username){
    this.username = username;
}

const userOne = new createUser('PK', 'pk@pk.pk', 'pk');

console.log(userOne)
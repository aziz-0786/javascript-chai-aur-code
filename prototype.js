//is a behavior of js
//everything including arrays, functions are all object
//so we can use dot notation to access properties of an object
function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score ++
}
createUser.prototype.printme = function(){
    console.log(this.username + " " + this.score)
}
const chai = new createUser('Aziz',25)
const tea = new createUser('Aman',44)
chai.printme()
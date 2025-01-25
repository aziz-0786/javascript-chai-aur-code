//object is collection of properties and methods
// js is prototype based but coating of classes and objects was introduced in 2015
//objct literal
//this is used to specify context that variables are to be accessed from outside ftn

const user={
    name:"john",
    age:30,
    logincount:4,
    getDetails: function(){
        console.log(this.name,this.age,this.logincount);
    }
}
console.log(user);

//constructor ftn
// const promiseOne = new Promise()
// const date = new Date()

function user1(username, logincount,isloggedin){
this.username = username;
this.logincount = logincount;
this.isloggedin = isloggedin;
return this
}
const userOne = new user1('aziz', 12,true)
console.log(userOne);
//if we dont use new, values will overwrite
const userTwo = new user1('Aman',33,false)
console.log(userTwo);

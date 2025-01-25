function sayMyName(name){
console.log(name)
}
sayMyName("Aziz")
sayMyName("Aman")

//this is not return this is just printing the value by console

function minus(a,b){
    console.log(a-b)
}
minus(4,6)

// return
function add(a,b){
    return a+b
}
console.log(add(4,6)) // this will print the return value

function login(userName) {
    return `${userName} just logged in`
}
console.log(login("Aziz"));

//if we dont know number of parameters we use rest
function sum(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        }
        return sum;
        }
        console.log(sum(1,2,3,4,5,6,7,8))
        
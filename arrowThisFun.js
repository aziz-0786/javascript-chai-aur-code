//In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
const user = {
    username: "Aziz",
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()
console.log(this);

const chai = () => {
    console.log(this);
}
//With arrow functions the this keyword always represents the object that defined the arrow function.
//In short, with arrow functions there are no binding of this.
const addTwo = (num1, num2)=> num1 +num2
// we dont need to write return value if we are using this paranthesis in arrow function
const addThree = (num1, num2, num3)=> (num1+num2+num3)
// to return object, we have to use paranthesis
const user2 = ()=> ({username:"Aziz"})

//IIFE(immediately invoked function expressions)
//IIFE is a function that is called immediately after it is defined
(function hey(name) {
    console.log(`hey ${name}`);    
})('Aziz');
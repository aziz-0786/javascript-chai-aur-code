// 2 methods to declare objects 1. as literal(no singleton) 2. as constructor (singleton)
// 1. as literal
const user1 = {
    name: "Aziz",
    age : 24,
location :"hyd",
email: "a@gmail.com"
}
console.log(user1);
//2. as constructor
const tinderUser = new Object()
tinderUser.name = "Ayush"
tinderUser.age = 25
tinderUser.location = "delhi"
tinderUser.email = "ay@gmail.com"
console.log(tinderUser);

const regularUser = {
    email:"aa@gmail.com",
    fullname:{
        first:"amaan",
        last:"khan"
    }
}
console.log(regularUser.fullname.first);
const obj1 = {
    1: "a",
2: "b"
}
const obj2 = {
    1: "z",
2: "m"
}
const obj3 = {...obj1, ...obj2}
console.log(obj3);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));


const course = {
    name: "javascript",
    duration: "30 days",
    "price": 5000,
    }
    console.log(course.price);

    //destructuring of objects
    const {name, duration, price} = course
    console.log(name);
    console.log(duration);
    console.log(price);

// values come mostly in json format like this or even sometimes in the form of arrays
// {
//     "name": "ayush",
//     "age": 25,
//     "location": "delhi",   
// }
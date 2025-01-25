const promiseOne = new Promise(function(resolve,reject){
    //do and async task // db task or network task
    setTimeout(function(){
        console.log('async task is done')
        resolve()
    },1000)
})
promiseOne.then(function(){
console.log('promise consumed');

})
const promiseTwo=new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log('async task 2');
    resolve()
   },1000)
   
}).then(function(){
console.log('async 2 resolve');
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'aziz',email:'aziz@example'})
    },1000)
    })

    promiseThree.then(function(user){
console.log(user);
    })

    const promiseFour= new Promise(function(resolve,reject){
setTimeout(function(){
    let error = false
    if(!error){
        resolve('RESOLVED')
}
else{
    reject('REJECTED')
}
},1000)
    })
   const userN= promiseFour.then(function(user){
     console.log(user);
        
    })
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     //Database calls, cryptography, network
//     setTimeout(function(){
//         console.log("Async task is comppleted.");
//         resolve()
//     }, 2000) 
// })

// promiseOne.then(function(){
//     console.log("Promise consumed.");
    
// })


// const promiseTwo = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Task 2 completed.");
//         resolve({username: "Sonu", password: 1234})
//     })
// })

// promiseTwo.then((user) => {
//     console.log(user);
// })


// const promiseThree = new Promise(function(resolve, reject){
//     let error = false;
//     if(!error){
//         resolve({username : "Sonu Poudel", address: "Chitwan"}) 
//     }else{
//         reject("Something went wrong.")
//     }
// })

// promiseThree.
// then((e) => {
//     console.log(e);
//     return e.username
// }).
// then((username) => {
//     console.log(username);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("The promise is either resolved or rejected.");
    
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function() {
//         let error = true;
//         if(!error){
//             resolve({username : "Javascript"}) 
//         }else{
//             reject("Something went wrong.")
//         }
//     }, 1000);
// });

// async function consumepromiseFour(){
//     try{
//         const result = await promiseFour
//     console.log(result); 
//     }
//     catch(error){
//         console.log(error);
        
//     }
// }
// consumepromiseFour()


// async function getallUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log("E:", error);
        
//     }
// }
// getallUsers()

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then(function(response){
    return response.json();
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
}) 





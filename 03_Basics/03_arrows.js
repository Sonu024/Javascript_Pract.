// const user = {
//     username: "Sonu",
//     price: 400,
//     greeting: function(){
//         console.log(`${this.username}, Welcome to my Youtube channel.`);
//         console.log(this);
//     }
// }
// user.greeting(); 
//console.log(this);       //{}      //Accepted


function user(){
     username= "bhbkd"
     console.log(this.username);
}
user();

// const user = function(){
//     username= "bhbkd"
//     console.log(this.username);
// }
// user();


//++++++++++++++++++++Arrow+++++++++++++++++++++
//() => {}
    //explicit
//     const user = (num1, num2) =>{
//         return num1 + num2
//     }
//    console.log(user(1, 2));


   ///implicit ----> donot use {} and return
// const user = (num1, num2) => num1 + num2
// console.log(user(1, 2));

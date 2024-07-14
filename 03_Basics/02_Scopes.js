//scopes
let a = 40

if (true) {
    let a = 2
    const b = 4
   // var c = 7
   // console.log("Inner a:", a);             //Inner a: 2

}
//console.log(a);             //error
// console.log(b);             //error
//console.log(c);               //7              so don't use var



// function one(){
//     const username= "Sonu"
//     function two(){
//         const address = "Nawalpur"
//         console.log(username)
//     }
//     two();
//     console.log(username);
// }
// one();
//child  can access parent function but parent can't access child function




// if (true){
//     const name= "Sonu"
//     if(name == "Sonu"){
//         const caste= " Chhetri"
//         console.log(name + caste);
//     }
// }


//two ways to declare function
add1(5);                              //can be done
function add1(num){
    console.log(num + 1);
}


//add2(5)                               //can't be done
const add2 = function(num){
    console.log(num + 2);
}
//add2(5)                             //can be done

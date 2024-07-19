// const username = "Sonu"           //Username  available.
// const username = ""                //Username  unavailable. 
// const username =[]                 //Username available.
// if(username.length == 0){
//     console.log("Username  available.");
// }else{
//     console.log("Username  unavailable.");
// }



//Truthy value
//" ", "False", "0", [], {}, function(){}

//Falsy value
//"", null, undefined, NaN, 0, -0, BigInt 0n


const myObj = {}
if (Object.keys(myObj).length == 0)
[
    console.log("Object is empty")
]

//Nullish coalescing operator (?? ) : null undefined
let value;
// value= 5 ?? 15         //5
// value = null ?? 15     //15
value = undefined ?? 10 ?? 15        // 10
console.log(value);


//terniary  operator
// condition ? true : false
const score = 45
score >=50 ? console.log("Greater than 50") : console.log("Less than 50");

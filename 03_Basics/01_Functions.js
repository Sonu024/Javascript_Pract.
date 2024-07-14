function alphabet(){
    console.log("A");
    console.log("B");
    console.log("C");
}
//alphabet();

//functiion to add two numbers
// function addnumbers(num1, num2)
// {
//     console.log(num1+num2);
// }
// addnumbers(3, 6);


function addnumbers(num1, num2){
    //   const  result= num1+ num2
    //   return result;
    return num1+num2
}
//const  result= addnumbers(9,2)
// console.log("Result:", result);



function username(name = "nothing"){                 //Hi! I am nothing
    if (name == undefined){
        console.log(`Please enter a name`);
        return
    }
    return `Hi! I am ${name}`
}
//console.log(username("Sonu"));           //Hi! I am Sonu
//console.log(username());                 //Hi! I am 


// const obj = {
//     username: "Sonu",
//     score: 50,
// }

// function score(var1, var2, ...num){
//     console.log(...num);
// }
// score(67, 43, 32, 24, 465);            //32 24 465             //67 and 43 are for var1 andvar2


function details(anyobj){
    console.log(`Username is ${anyobj.username} and score is ${anyobj.score}`);
}
//details(obj);
// details(
//     {
//         username: "Sonu",
//         score: 50,
//     }
// )

//Array
//const Array = [100, 200, 300,400, 500]
function extractArray(getArray){
    return getArray[2]
}
//console.log(extractArray(Array));
console.log(extractArray([122, 35435, 3432, 3432]));




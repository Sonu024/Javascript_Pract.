// Primitive and reference (nin-primitive)
//Primitive
// string, number, boolean, null, undefined, BigInt, symbol


const id = Symbol('10')
const idValue = Symbol('10')
console.log(id == idValue);
//Even though they have same value they aren't equal

//Reference
// Array, Objects, Functions

const books = ["Web", "Cryptography"]; //typeof object
//Array

//object
let myObj = {
   age: 45
}

const myFunction= function(){                //typeof function
    console.log("Hello World");
}

//console.log(typeof );




/***************************Memory types*******************/
//Premitive datatypes uses stack memory 
//Non premitive datatypes uses heap memory

let stack1 = "Sonu Chhetri"
let stack2 = stack1
stack2 = "Sonu Poudel"
console.log(stack2);       //Sonu Poudel
console.log(stack1);       //Sonu Chhetri

//change in value of stack2 only changes the copied value of stack1 but not the original value

let heap1 = {
   name: "Sonu Chhetri",
}
heap2 = heap1
heap2.name = "Sonu Poudel"
console.log(heap1.name);    //Sonu Poudel
console.log(heap2.name);    //Sonu Poudel

//change in value of heap2 changes the original value of heap1



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
    age =45
}

const myFunction= function(){                //typeof function
    console.log("Hello World");
}

console.log(typeof myObj);
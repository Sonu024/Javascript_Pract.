let score = 24
console.log(typeof score);

let conversion= Number(score);
console.log(typeof conversion) 

//----------------------type after conversion to number-----------
// "24"--> number
// 24abc--> NaN
//null--> 0
//undefined--> NaN
//true=1 //false=0

let happy = 1
console.log(typeof happy)
let happy_boolean= Boolean(happy)
console.log(typeof happy_boolean);
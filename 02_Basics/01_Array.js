//Array is an object that contains various data items within a single variable
const myArr = [2, 4, 6, 8, 10]
// console.log(myArr[2]);

// const newArr = new Array("Son", "onu", "Sonu")
// console.log(newArr[0]);


//Array methods
// myArr.push(12)                         //[ 2, 4, 6, 8, 10, 12 ]
// myArr.pop()                            //[ 2, 4, 6, 8, 10 ]

// myArr.unshift(0)                        //[ 0, 2, 4, 6, 8, 10 ]
// myArr.shift()                           //[ 2, 4, 6, 8, 10 ]

//const newArr1 = myArr.join()                //join -> changes array to string
//console.log(myArr);                         //[ 2, 4, 6, 8, 10 ]
//console.log(newArr1);                       //2,4,6,8,10 


//slice, splice
console.log("A", myArr);

const newA1 = myArr.slice(1,3)                  //B [ 2, 4, 6, 8, 10 ]
                                                    [ 4, 6 ]
console.log("B", myArr);
console.log(newA1);

const newA2 = myArr.splice(1,3)                 //C [ 2, 10 ]
                                                    [ 4, 6, 8 ]
console.log("C", myArr);
console.log(newA2);




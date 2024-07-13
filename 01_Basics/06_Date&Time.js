//Date

// let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);              //object



//+++++++Own created date++++++++++
let myOwnDate = new Date(2081, 2, 23, 6, 7)       //year, mon, day, hr, min,sec
console.log(myOwnDate.toLocaleString());

//let myTimeStamp = Date.now()
//console.log(myTimeStamp);                      //1720611935338


//let myOwnDate = new Date(2081, 2, 3)
//console.log(myOwnDate.getTime());               //3509892900000  in milisecond
//console.log(myOwnDate.getTime()/1000);             //3508164900 in second

//console.log(Math.floor(Date.now()/1000));             //1720612485


let newDate = new Date()
console.log(newDate.getDate());

myOwnDate.toLocaleString('default' ,{ weekday:"long"})
        




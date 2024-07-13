// singleton
//object literals

const mySym = Symbol("key")
const myobj = {
    name: "Puru",
    age: 15,
    email: "Puru@gmail.com",
    "fav hobby": "singing",
    [mySym]: "Smile"                   //way to add symbol to the key of object
}

//console.log(myobj.age);
//console.log(myobj["email"]);
//console.log(myobj["fav hobby"]);
//console.log(myobj[mySym]);

myobj.email= "happy@gmail.com"          //can change the value inside object
//console.log(myobj.email);

//Object.freeze(myobj);
myobj.email= "sad@gmail.com" 
//console.log(myobj.email);              //happy@gmail.com    as object is freezed

console.log(myobj);


myobj.greeting = function(){
    console.log("Hi! THis is me");
}
console.log(myobj.greeting());

myobj.greeting1 = function(){
    console.log(`Hi! THis is me ${this.name}`);
}
console.log(myobj.greeting1());



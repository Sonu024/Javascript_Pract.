//const newUser = new Object()
//const newUser = {}
//Both are same
//console.log(newUser);

const newUser = {
    username: "Sonu",
    email: "Sonu@gmail.com",
    address: {
        pastAddress: "Nawalpur",
        presentAddress: "Chitwan",
    }
}
//console.log(newUser.address.pastAddress);


//Combining objects
const objA = {
    a: "A",
    b: "B",
}
const objB = {
    c: "C",
    d: "D",
}

//const objC = Object.assign({}, objA, objB)
//console.log(objC);                   //{ a: 'A', b: 'B', c: 'C', d: 'D' }

//mostly we use this syntax to combine objects
const objC = {...objA, ...objB}
//console.log(objC);

const user = [
    {
        id: 10,
        email: "hb@gmail.com"
    },
    {
        email: "hgvsd@gmail.com"
    },
    {
        email: "hbdsds@gmail.com"
    }
]
//console.log(user[1]);                   //object inside array

// console.log(Object.keys( newUser));
// console.log(Object.values( newUser));




//Destructuring 
const {username: name}= newUser
//console.log(username);
console.log(name);





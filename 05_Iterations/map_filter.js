// const myNum = [1, 2, 3, 4, 5]
// const value= myNum.map( (num) => {
//     return num + 10
// })
//console.log(value);

//map looping_-----------------------

// const myNum = [1,2,3,4,5,6,7,8]
// const value = myNum
//         .map( (num) => num + 1)
//         .map ( (num) => num * 10)
//         .filter( (num) => num>= 50)
// console.log(value);


//Ruduce
const value = [1,2,3,4,5]
const sum = value.reduce( (acc, val) => {
    // console.log(`acc: ${acc} and current_value: ${val}`);
     return acc + val
} ,0)
// console.log(sum);


const shopping = [
    {
        shampoo: "Clinic plus"
        price:' 300'
    },
    {
        shampoo: "Sunsilk"
        price: 100
    },
    {
        shampoo: "Pantene"
        price: 200
    },
]
const totalPrice = shopping.reduce( (acc, item) => acc + item.price, 0)
console.log(totalPrice);



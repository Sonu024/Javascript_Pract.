// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const values = arr.forEach( (item) => {
//     console.log(item);
// })
// console.log(values);
//foreach returns nothing


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    
// const nums = arr.filter( (num) => {
//     return   num < 5
// })  
//console.log(nums);      


//usong foreach
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arrNums = []
// arr.forEach( (num) => {
//     if(num>5){
//        arrNums.push(num)
//     }
// })
// console.log( arrNums);


const arr = [
    {
        book: "A",
        author: "X",
        edition: 2001 
    },
    {
        book: "B",
        author: "Y",
        edition: 2002 
    },
    {
        book: "C",
        author: "Z",
        edition: 2005
    }
]
const Details = arr.filter( (item) => {
   return item.edition <= 2005 && item.book == "B"
})
console.log(Details);
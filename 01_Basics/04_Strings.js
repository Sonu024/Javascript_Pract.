const name = "Sonu"
const age = 21
console.log(`My name is ${name} and my age is ${age}`);


const game = new String('Amongus')
console.log(game[0]);
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.charAt(3));           //to know the character at position 3
console.log(game.indexOf('g'));                         //to know the position of charcter g

const nextGame = game.substring(0, 4)                 
console.log(nextGame);                     //Amo

//const nextGame = game.substring(-2, 3)                 
//console.log(nextGame);                     //Amo


//const anotherGame = game.slice(0, 3)
//console.log(anotherGame);                   //Amo

const anotherGame = game.slice(-7, 5)        
console.log(anotherGame);   

const college = "    Birendra      "
console.log(college);                   //give output with sapce
console.log(college.trim());            //give output without sapce


const url = "Happy@20/40.com"
console.log(url);
console.log(url.replace('/', '-'));           //replace / with -

console.log(url.includes('Happy'));           //to know whether it is included in url or not
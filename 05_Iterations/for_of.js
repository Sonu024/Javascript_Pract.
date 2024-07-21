//for of
// const array = ["Pinku", "Puru", "Golu"]
// for (const i of array) {
//     console.log(i);
// }

const string = "Sonu Poudel"
for (const i of string) {
    // console.log(i);
}


//Map
const map = new Map()
map.set('NP', "Nepal")
map.set('USA', "United States of America")
map.set('NP', "Nepal")
//console.log(map);


for (const [key, value] of map) {
    //console.log(key, ':-', value);
}
// NP :- Nepal
// USA :- United States of America



const myObj= {
    'subject1' : 'js'
}
for (const [key, value] of myObj) {
    //console.log(key, value);
}                //not iterable
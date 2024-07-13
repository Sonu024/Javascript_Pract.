const sub1 = ["web", "Crypto", "Multimedia"]
const sub2 = ["c-prog.", "object-oriented"]

//not effective
//sub1.push(sub2)
     //[ 'web', 'Crypto', 'Multimedia', [ 'c-prog.', 'object-oriented' ] ]
//console.log(sub1);

//const subject = sub1.concat(sub2)
    //[ 'web', 'Crypto', 'Multimedia', 'c-prog.', 'object-oriented' ]
//console.log(subject);

//++++++++prefer split over concat++++++++
//const subject = [...sub1, ...sub2]
//console.log(subject);
        //[ 'web', 'Crypto', 'Multimedia', 'c-prog.', 'object-oriented' ]



const new_Arr = [1, 2, 3, [4, 3], [5, 1, 2, [4,7]]]
const real_Arr = new_Arr.flat(Infinity)
console.log(real_Arr);
         //[1, 2, 3, 4, 3, 5, 1, 2, 4, 7]


//to change non-array to array
console.log(Array.isArray("Sonu"));             //false            isArray->checks whether it is array or not
console.log(Array.from("Sonu"));                //[ 'S', 'o', 'n', 'u' ]     from-> change it to array


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));        //[ 100, 200, 300 ]      of->also changes to array


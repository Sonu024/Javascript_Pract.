//for array
const coding = ["Js", "Python", "C"]
coding.forEach( function (val){
    //console.log(val);
})

coding.forEach( (val) => {
    //console.log(val);
})

function printme(val) {
   // console.log(val);
}
coding.forEach(printme);


//to access objects inside array
const myArr = [
    {
        username: "Puru",
        hobby: "Dancing"
    },
    {
        username: "Golu",
        hobby: "Singing"
    },
    {
        username: "Nona",
        hobby: "Playing"
    }
]
myArr.forEach( (item) => {
    console.log(item.username);
})

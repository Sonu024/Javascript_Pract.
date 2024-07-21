//to use loop for object
const myObj = {
    js : "Javascript",
    cpp : "C++",
    rb: "ruby"
}

for (const key in myObj) {
    // console.log(`${key} :- ${myObj[key]}`);
}


const Arr = ["Son", "Sun"]
for (const key in Arr) {
    console.log(`${key} :- ${Arr[key]}`);
}
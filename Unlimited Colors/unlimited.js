//Generate  random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#"
    for(i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let Start
document.querySelector("#start").addEventListener("click",function(){
    const startChangingColor = function(){
        document.body.style.backgroundColor = randomColor();
    }
   if(!Start){
    Start = setInterval(startChangingColor, 1000);
   }
})


const stopChangingColor = function(){
    clearInterval(Start)
    Start = null;
}
document.querySelector("#stop").addEventListener("click", stopChangingColor)





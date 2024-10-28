const clock = document.querySelector('#clock')

setInterval(function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 2000);    //2000 means changes in 2 second





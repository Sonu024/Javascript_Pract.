//For
// for (let i = 0; i < 5; i++) {
//     const element = i;
//     console.log(element);
//     if(element ==3){
//         console.log("3 is the hero.");
//     }
// }


//for table upto 5
// for (let i = 1; i <=5; i++) {
//      console.log(i);i
//      for (let j = 1; j <= 10; j++) {
//        console.log(i + '*' + j + '=' +i*j);
//      }
    
// }

//Break and continue
// for (let i = 0; i < 5; i++) {
//     const element = i;
//     if(element ==3){
//         console.log("3 is the hero.");
//         break;
//     }
//     console.log(element);
// }                                                  //comes out of loop after 3 is detected


for (let i = 0; i < 5; i++) {
    const element = i;
    if(element ==3){
        console.log("3 is the hero.");
        continue;
    }
    console.log(element);
}                                                     //runs even 3 is detected
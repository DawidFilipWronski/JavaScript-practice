let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
document.body.addEventListener('keydown', (e)=>{
    if(red < 0){
       red = 0;
       green = 0;
       blue = 0;
    } 
    if(red > 255){
       red = 255;
       green = 255;
       blue = 255;
    } 
    switch(e.key){        
        case 'ArrowUp':
            red +=5;
            green +=5;
            blue +=5;
            document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
            break;
        case 'ArrowDown': 
            red -=5;
            green -=5;
            blue -=5;
            document.body.style.backgroundColor = `rgb(${red},${green},${blue})`; 
            break;

    }
});

// const changeColor = (e) => {
//     if(red < 0){
//         red = 0;
//         green = 0;
//         blue = 0;
//     } 
//     if(red > 255){
//         red = 255;
//         green = 255;
//         blue = 255;
//     } 
//     if (e.keyCode == 38){
//         red +=5;
//         green +=5;
//         blue +=5;        
//     }
    
//     if(e.keyCode == 40){
//         red -=5;
//         green -=5;
//         blue -=5;
//     } 
//     document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;  
//     // console.log(e.code);
      
// }



// document.body.addEventListener('keydown', changeColor);


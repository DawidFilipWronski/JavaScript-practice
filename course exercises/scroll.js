// console.log('wroks');

// window.addEventListener('scroll',()=>{
//     console.log(scrollY);
    
// })
const div = document.querySelector('div');
let size = 10;
let grow = true;
window.addEventListener('scroll',()=>{

    if(grow == true){
        size += 5;
        div.style.width = size +'px';
        div.style.height = size +'px';
    }
    else{
        size -= 5;
        div.style.width = size +'px';
        div.style.height = size +'px';
    }  

    if(size >= window.innerWidth / 2){
        grow = false;
    }
    else if(size <=0) {
        grow = true;
    }})
    
        
 
            
        
        
     

console.log('dziala');

const div = document.createElement('div');
document.body.style.height = '10000vh';
document.body.appendChild(div);
div.style.backgroundColor = "green";
div.style.height = "10px";
let size = 10;
let permission = true;

window.addEventListener('scroll', ()=>{
    if(size > window.innerHeight / 2){
        permission = false;
    }
    else if(size <= 10){
        permission = true;
    }
    if(permission){
        size+=5;
        div.style.backgroundColor = 'green';
        
    }
    else{
        size-=5;  
        div.style.backgroundColor = 'red';      
    }
    div.style.height = size +'px';
    
    
    
}) 


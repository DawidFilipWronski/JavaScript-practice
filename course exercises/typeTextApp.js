const h1 = document.querySelector('h1');
let counter = 0;
window.addEventListener('keydown',(e)=>{
    console.log(e.code);
    //checkout if pressed key is a char
    if((e.key).length == 1 ){
        const span = document.createElement('span');
        document.body.appendChild(span);
        span.textContent = e.key;
    }

    //keys functions
    switch(e.code){
        case 'Space':      
            span = document.createElement('span');
            document.body.appendChild(span);
            span.textContent = 's';
            span.style.color = 'white';
            break;
        case 'Backspace': 
            document.body.removeChild(document.querySelector('span:last-child')); 
            break;
        case 'Enter': 
            span = document.createElement('span');
            document.body.appendChild(span);
            document.querySelector('span:last-child').style.display = 'block';
            break;             
    }
    // if(e.code == 'Space'){
    //     console.log('space works');        
    //     const span = document.createElement('span');
    //     document.body.appendChild(span);
    //     span.textContent = ' ';
    //     span.style.color = 'white';            
    // }
    // if(e.key == 'Backspace'){
    //     console.log('dziala');
    //     document.body.removeChild(document.querySelector('span:last-child'));            
    // }
    
    
    
})
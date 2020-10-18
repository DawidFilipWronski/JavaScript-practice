const h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.style.textAlign = 'center';
h1.style.lineHeight = '100vh';
document.body.addEventListener('click', (e)=>{
    const x = e.clientX;
    const y = e.clientY;
    const h1 = document.querySelector('h1');
    console.log(x + " " + y);    
    if(x%2 == 0 && y%2 == 0){
        document.body.style.backgroundColor = 'red'; 
        h1.textContent = 'obie parzyste!';         
    }
    else if(x%2 != 0 && y%2 != 0){
        document.body.style.backgroundColor = 'blue';
        h1.textContent = 'obie nieparzyste!';
    }
    else{
        x%2 == 0 ? h1.textContent = 'pierwsza parzysta a druga nie' : h1.textContent = 'druga parzysta a pierwsza nie';
        document.body.style.backgroundColor = 'green';
    }
})
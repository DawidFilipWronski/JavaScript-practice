const slide = [{
   img: 'images/img1.jpg',
   text: 'Pierwszy tekst'  
},{
   img: 'images/img2.jpg',
   text: 'Drugi tekst' 
},{
   img: 'images/img3.jpg',
   text: 'Trzeci tekst' 
}];
const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

let active = 0;
const time = 2000;

const changeDot = () =>{
    const activeDot = dots.findIndex(dot => 
        dot.classList.contains('active')        
    )
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');      
}
const changeSlide = () =>{
    active++;
    if(active === slide.length) active = 0;
    image.src = slide[active].img;
    h1.textContent = slide[active].text;   
    changeDot(); 
}
const keyChangeSlide = (e) => {
    if(e.keyCode == 37 || e.keyCode == 39){
        e.keyCode == 37 ? active-- : active++;
        if(active === slide.length){
            active = 0;
        } else if(active < 0){
            active = slide.length - 1;
        }
        image.src = slide[active].img;
        h1.textContent = slide[active].text;
        changeDot(); 
    }
     
    
           
}
// setInterval(changeSlide, time);
window.addEventListener('keydown', keyChangeSlide);

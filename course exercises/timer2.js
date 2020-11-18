const start = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const span = document.querySelector('.time');

let time = 0;
let active = false;
let idI;
const timer = () => {
    if(!active){
      active = !active;
      start.textContent = 'Pauza';
      idI = setInterval(go,10);          
    }
    else{
        active = !active;
        start.textContent = 'Start';        
        clearInterval(idI);
    }   
}
const go = () => {
    time++;
    span.textContent = (time/100).toFixed(2);
}
const reset = () => {
    time = 0;
    span.textContent = '_ _ _';
    start.textContent = 'Start';
    active = false;
    clearInterval(idI);

}

start.addEventListener('click', timer);
resetBtn.addEventListener('click', reset);
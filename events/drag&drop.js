// console.log('works');
const div = document.querySelector('div');
div.style.top = 100 + 'px';
div.style.left = 100 + 'px';
let flag = false;
let clickX, clickY;

div.addEventListener('mousedown',(e)=>{
    div.style.backgroundColor = "gray";
    clickX = e.offsetX;
    clickY = e.offsetY;
    flag = true;
})

    div.addEventListener('mousemove',(e)=>{
    if(flag == true){
    div.style.top = e.clientY - clickY + 'px';
    div.style.left = e.clientX - clickX  + 'px';
        }
})


div.addEventListener('mouseup',()=>{
    div.style.backgroundColor = 'black';
    flag = false;
})


// console.log('works fine');

const addLi = document.querySelector('.addLi');
const ul = document.querySelector('ul');
let number = 1;
addLi.addEventListener('click', ()=>{
    const li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = number;
    if(number%3 == 0) li.classList.add('big');    
    number +=2;
})
// console.log('works fine!');

const addBtn = document.querySelector('.addBtn');
const forDivs = document.querySelector('.forDivs');
let number = 1;

addBtn.addEventListener('click', ()=>{
    const newDiv = document.createElement('div');
     forDivs.appendChild(newDiv);
     newDiv.textContent =`${number}`;
     (number % 5 !== 0) ? newDiv.classList.add('normal') : newDiv.classList.add('winner');
     number++;
})
    

// addBtn.addEventListener('click', ()=>{
//     const newDiv = document.createElement('div');
//      forDivs.appendChild(newDiv);
//      newDiv.textContent =`${number}`;

//      if(number % 5 !== 0){     
//      newDiv.classList.add('normal');    
// }
//     else{
   
//      newDiv.classList.add('winner'); 
// }
//     number++;    
// })


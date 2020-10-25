let psb = ['fight','think about it again'];
const add = document.querySelector('.add');
const advice = document.querySelector('.advice');
const input = document.querySelector('input');
const resetBtn = document.querySelector('.reset');
const adviceBtn = document.querySelector('.showAdvice');
const psbBtn = document.querySelector('.showPsb');

//add input value to psb array
const addPsb = (e) => { 
 e.preventDefault();
 if(input.value){
  psb.push(input.value);
  alert(`Dodałeś ${input.value}`);
  console.log(psb);
  clearInput();
 } 
}
//clear psb array
const reset = (e) => {
 e.preventDefault();
 psb = [];
 clearInput();
}
//draw array items 
const draw = (e) =>{
  e.preventDefault();
  const index = Math.floor(Math.random() * psb.length);
  advice.textContent = psb[index];
}
//alert all array items
const alertPsb = (e) =>{
  e.preventDefault();
  alert(psb);
}
//clears input value 
const clearInput = () =>{
  input.value = '';
} 
add.addEventListener('click', addPsb);
resetBtn.addEventListener('click', reset);
adviceBtn.addEventListener('click', draw);
psbBtn.addEventListener('click', alertPsb);

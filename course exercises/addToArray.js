const btn = document.querySelector('button');
const names = [];
const addName = (e) => {
 e.preventDefault();
 const div = document.querySelector('div');
 const input = document.querySelector('input'); 
  if(input.value){
   for(name of names){
    if(input.value === name){
     alert('Ale to już było!'); 
     input.value = '';
     return;
    }            
   }
   names.push(input.value);
   div.textContent = names;
  }
  input.value = '';
}
btn.addEventListener('click',addName);

const input = document.querySelector('input');
const div = document.querySelector('div');
const passwords = ['jeDen','dWA'];
const messages = ['Super','It works'];


const showMessage = (e)=>{
passwords.forEach((password,index)=>{
    if(password.toLowerCase() === e.target.value.toLowerCase()){
        div.textContent = messages[index];}           
})
}
input.addEventListener('input',showMessage)
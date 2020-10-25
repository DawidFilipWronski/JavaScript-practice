// console.log('works');
const input = document.querySelector('input');
const div = document.querySelector('.message');
const passwords = ['qwerty', 'zxc'];
const messages = ['Hasło prawidłowe', 'rowniez prawidlowe'];

input.addEventListener('input', (e)=>{
    div.textContent = '';
    passwords.forEach((password, index)=>{
        if(e.target.value === password){
            div.textContent = messages[index];
        }
    })
    
})
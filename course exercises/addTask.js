const textInput = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');
const span = document.querySelector('span');
const search = document.querySelector('.search');
const li = document.querySelectorAll('li');
let index = 0;
let startMessage = true;
let arr = [];

const add = () => {
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    if(textInput.value === ''){        
        textInput.style.border = 'solid 2px red';
        return;
    }
    ul.appendChild(li).textContent = textInput.value;
    li.setAttribute('data-key', index);
    li.appendChild(deleteBtn).textContent = 'usun';
    deleteBtn.setAttribute('data-key', index);
    deleteBtn.addEventListener('click', remove);
    index++;
    updateTaskNumber();
    arr.push(textInput.value);
    textInput.value = '';
    console.log(arr);   
}
const remove = (e) => {
    const clickKey = e.target.dataset.key;
    document.querySelector(`li[data-key ='${clickKey}'`).remove();
    updateTaskNumber();
}
const updateTaskNumber = (message) => {
    const taskList = document.querySelectorAll('.task-list li');
    if(startMessage){        
        span.textContent = message;
        startMessage = false;
    }
    else{
        if(taskList.length === 0){
            span.textContent = 'You have free time!';
        }
        else{
        span.textContent = taskList.length;
        }
    }       
}
const resetStyle = (e) => {
        textInput.style.border = 'solid 2px black';
}
const check = (e) => {   
    const searchText = e.target.value;
    let tasks = [...li];
    tasks = tasks.filter(task => task.textContent.includes(searchText));
    ul.textContent = '';
    tasks.forEach(task => ul.appendChild(task)); 
    console.log(searchText);   
}
updateTaskNumber('Add some task to your list!');
button.addEventListener('click', add);
textInput.addEventListener('keydown', resetStyle);
search.addEventListener('input', check);




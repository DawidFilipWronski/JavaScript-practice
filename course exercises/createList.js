// console.log('works');
let order = 1;
let font = 10; 
const init = ()=>{
    const btn =  document.createElement('button');    
    const ul = document.createElement('ul')
    // const li = document.createElement('li');
    document.body.appendChild(btn);
    document.body.appendChild(ul);
    btn.textContent = "Create list !";    
    btn.addEventListener('click', createLiElements)
}


const createLiElements = ()=>{
    const ul = document.querySelector('ul');
    for ( let i = 0; i < 10; i++){
        const li = document.createElement('li');   
        ul.appendChild(li).textContent =`Element listy ${order++}`;;
        li.style.fontSize = font + 'px';
        font++;
    }

}

init();
    
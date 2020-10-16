// console.log('works');

const btn = document.querySelector('button');
const li = document.querySelectorAll('li');
let fontSize = 16;
let a = 15;

btn.addEventListener('click',()=>{
    for(i = 0; i < li.length; i++){
        li[i].style.display = 'block';
        li[i].style.fontSize = `${fontSize}px`;
    }
    fontSize += 2;   
})

// foreach
// btn.addEventListener('click',()=>{
//     li.forEach((item)=>{
//         item.style.display = "block";
//         item.style.fontSize = `${fontSize}px`;
//     })    
//     fontSize += 2;    
// })


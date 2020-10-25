const btn = document.querySelector('.draw');
const deleteBtn = document.querySelector('.delete');
const div = document.querySelector('.result');
const names = ['Weronika', 'Karolina','Agata','Asia','Patrycja','Kasia','Ola','Emila','Justyna','Anastazja'];
const prefixes = ['Najlepsze imię to','Twoja córka ma na imię','Dziewczynka powinna się nazywać','To na 100%'];
let flag = false;

const drawName = () =>{
    // console.log(Math.random());
    if(names.length > 0){
        nameIndex = Math.floor(Math.random() * names.length);
        div.textContent = `${prefixes[Math.floor([Math.random() * prefixes.length])]} ${names[nameIndex]}`; 
        flag = true;
    }
    else 
    div.textContent = 'Nie można Cię zadowolić :)';       
}
deleteBtn.addEventListener('click', deleteName = ()=>{
    if(flag === true){
        names.splice(nameIndex,1);
    }
})
btn.addEventListener('click', drawName);

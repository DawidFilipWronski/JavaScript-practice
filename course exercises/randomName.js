const btn = document.querySelector('button');
const div = document.querySelector('div');
const names = ['Weronika', 'Karolina','Agata','Asia', 'Patrycja','Kasia','Ola','Emila','Justyna','Anastazja'];
const prefixes = ['Najlepsze imię to','Twoja córka ma na imię','Dziewczynka powinna się nazywać','To na 100%'];

const drawName = () =>{
    // console.log(Math.random());
    div.textContent = `${prefixes[Math.floor([Math.random() * prefixes.length])]} 
    ${names[Math.floor(Math.random() * names.length)]}`;
}
btn.addEventListener('click', drawName);
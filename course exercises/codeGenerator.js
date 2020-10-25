const btn = document.querySelector('button');
const section = document.querySelector('section');
const chars = "ABCDEFG1234567890";
const codeNumber = 100;
const charNumber = 10;

const generateCode = () => {
    for(let i = 0; i < codeNumber; i++){
        let code = '';
        for(let i = 0; i < charNumber; i++){            
            const index = Math.floor(Math.random() * chars.length);         
            code += chars[index];                        
        }
          const div = document.createElement('div');
          section.appendChild(div).textContent = code;
    }
}
btn.addEventListener('click', generateCode);
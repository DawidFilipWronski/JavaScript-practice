// object constructor -way to create an object
// const dog = new Object();
// console.log(typeof dog);

//literal notation - next way to create an object
// const cat = {};
// console.log(typeof cat);

// cat.name = 'Denis';

//practice object creating

const cat = {
    name: 'Denis',
    color: 'red',
    eyeColor: 'black',
    size: 'small',
    medicalHistory : [2014,2018],
    voiceCounter: 0,
    voice(){
        this.voiceCounter++;
        console.log('meeoooow');        
    }
}

// cat.voice();
// console.log(cat.voiceCounter);
// cat.voice();
// console.log(cat.voiceCounter);
// cat.voice();
// console.log(cat.voiceCounter);
// cat.voice();
// console.log(cat.voiceCounter);
const dog = {
    voiceCounter: 14,
}

dog.voiceCounter +=3;
console.log(dog.voiceCounter);

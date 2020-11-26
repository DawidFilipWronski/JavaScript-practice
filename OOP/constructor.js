// console.log('works!');

const User = function(typ) {
    this.name = typ;
}
const pierwszy = new User('swir');
console.log(pierwszy);
pierwszy.name = 'pojeb';
console.log(pierwszy);

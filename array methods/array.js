const userName = ['Dawid','Kamil','Krzysiu','Arek','Gracjan','Tomek'];
const userAge = [24,25,26,27,27,33];
let whatReturns;
const text = 'Amalgamat';
let sentence = 'Ala ma kota, kot ma Ale';
// console.log(userName);
// console.log(userName[0]);
// console.log(userName.length);

// PUSH add new element(s) to the end of an array, returns new array length
// userName.push('Marek');
// userName.push('Darek', 'Franek');
// console.log(userName);
// console.log(userName);
// const whatReturn = userName.push('Paweł');
// console.log(userName);
// console.log(whatReturn); // new array length

// UNSHIFT add new element(s) to the beginning of an array, returns new array length

// console.log(userName.unshift('Leon'));
// console.log(userName);
// whatReturns = userName.unshift('Leon');
// console.log(whatReturns);

// POP delete last element and returns it, new array length
// console.log(userName);
// console.log(userName.pop());
// console.log(userName);


// SHIFT delete first element of an array and retuns it, new array length

// console.log(userName);
// console.log(userName.shift());
// console.log(userName);

// CONCAT marge arrays and returns new one

// console.log(userName);
// console.log(userAge);
// console.log(userName.concat(userAge));

// ... - spread oparator
// const tryIt =[...userName,...userAge];
// console.log(tryIt); 


// SLICE  get some part of an array, returns this part
// console.log(userName);
// console.log(userName.slice(2,5));
// console.log(userName.slice());
// console.log(userName.slice(0,-3));
// console.log(text.slice(0,3));



// SPLICE delete element(s) from an array and add new one(s), return deleted elements
// console.log(userName);
// // delete two beginning elements 
// console.log(userName.splice(0,2));
// console.log(userName);
// same as above and add new elements on the same place
// console.log(userName.splice(0,2, 'Bartek', 'Karol'));
// console.log(userName);
// just add elements without delete
// console.log(userName.splice(5,0,'Parys'));
// console.log(userName);


// SORT sort the elements of an array, NOT return- modifies an array

// console.log(userName);
// console.log(userName.sort());
// console.log(userAge.sort());
// console.log(userName);



// INDEXOF return index of given value (first result which match), if not exist return -1
// console.log(userName);
// console.log(userName.indexOf('Krzysiu'));
// console.log(userName.indexOf('Krzysztof'));


// INCLUDES check if an array have given value, returns true or false

// console.log(userName);
// console.log(userName.includes('Tomek'));
// console.log(userName.includes('Tomasz'));


// JOIN return all array elements on string, as argument take separator
// console.log(userName);
// console.log(userName.join(' '));
// console.log(userName);
// console.log(userName.join(':'));





// REVERSE change order of the elements of an array, modifies an array
// console.log(userName);
// console.log(userName.reverse());
// console.log(userName);


// SPLIT execute on string, return an array. As argument take separator. Splits string by separator and return an array with splited elements

// console.log(sentence);
// console.log(sentence.split(' '));



// ----
// MY EXERCISES
// ----

// Creating an array which contain indexes of chosen letter
// try it later using iterations

// let text = 'Ala ma kota, kot ma Ale';
// let chosenLetter = 'a';
// let indexOfA = []; 
// let letters = text.split('');
// console.log(letters);
// console.log(letters.indexOf(chosenLetter));
// indexOfA.push(letters.indexOf(chosenLetter));
// delete letters[(letters.indexOf(chosenLetter))];
// console.log(letters);
// console.log(letters.indexOf(chosenLetter));
// indexOfA.push(letters.indexOf(chosenLetter));
// delete letters[(letters.indexOf(chosenLetter))];
// console.log(letters);
// console.log(letters.indexOf(chosenLetter));
// indexOfA.push(letters.indexOf(chosenLetter));
// delete letters[(letters.indexOf(chosenLetter))];
// console.log(letters);
// console.log(letters.indexOf(chosenLetter));
// indexOfA.push(letters.indexOf(chosenLetter));
// console.log(indexOfA);
















// const showMessage = function (){
//     console.log('Show me!');    
// };
// showMessage();

// const showDegree = function (degree){
//     console.log(degree);    
// };
// showDegree('Capitan');

// const soldier = ['Luis', 'Ben', 'Jack'];
// const age = [24,20,31];

// const showSoldierData = function (name){
//     console.log(`Name: ${name}`);
//     return name;
// }
//  soldier.push(showSoldierData('Alfred'));

// function declaration

// function addNumbers(x,y){
//     return x+y;
// }
// const result = addNumbers(4,4);
// console.log(result);

// function constructor
//better dont use


// ARROW FUNCTION EC6

// const logText = (text) => {
    // console.log(text);    
// }
// logText('First way works fine!')

// or even shorter
// const logText = text => console.log(text);
// logText('Second way is shorter!');

// return how much parameters is declared on function declaration
// console.log(logText.length);


// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223

// const toReverse = (reverseIt) =>{
//     reverseIt += '';
//     return reverseIt.split('').reverse().join('') * 1; 
// }
// console.log(toReverse(32243));

//LONG VERSION

// const reverseIt = (toReverse) => {
//     toReverse = toReverse + '';
//     // console.log(toReverse);  
//     // console.log(typeof toReverse); 
//     // console.log(toReverse);    
//     let result = toReverse.split('');
//     result = result.reverse();
//     result = result.join('');
//     result *=1;
//     return result;    
//     // console.log(result);
//     // console.log(typeof result);    
// }
// console.log(reverseIt(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// const isPalindrome = (word) =>{
//     word = word.toUpperCase();
//     word = word.split(' ').join('');
//     let result = word.split('').reverse().join('');  
//     console.log(result);    
//     return result === word;
// }
// console.log(isPalindrome('nurses run'));

//3. Arguments object

 

// const myList = function(separator){
//     let list = '';
//     for(let i = 1; i < arguments.length; i++){
//         list += arguments[i] + separator;
//     }
//     return list;
// }
// console.log(myList(',','banana','apple','cucumber','orange'));

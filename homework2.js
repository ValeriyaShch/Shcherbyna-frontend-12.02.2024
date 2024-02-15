let userName = prompt('What is your name?');
// console.log('name is', userName);

let age = prompt('How old are you?');
// console.log('age is', age);

let country = prompt('Where are you from?');
// console.log('country is', country);

console.log(`${userName} ${age} ${country}`);

let userNumber = prompt('Enter a 5-digit number');
// console.log('number is', userNumber);

let firstNum = +userNumber[0];
// console.log(firstNum);

let secondNum = +userNumber[1];
// console.log(secondNum);

let thirdNum = +userNumber[2];
// console.log(thirdNum);

let fourthNum = +userNumber[userNumber.length-2];
// console.log(fourthNum);

let fifthNum = +userNumber[userNumber.length-1];
// console.log(fifthNum);

console.log(`${firstNum} ${secondNum} ${thirdNum} ${fourthNum} ${fifthNum}`);
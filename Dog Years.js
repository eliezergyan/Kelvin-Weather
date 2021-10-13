// My age
const myAge = 26;

// First 2 years of my human age
let earlyYears = 2;
earlyYears *= 10.5; 

// The rest of my years 
let laterYears = myAge - 2;

// Multiplying the rest of my years by 4
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// Calculating for my Dog years
let myAgeInDogYears = earlyYears + laterYears;

// My name in lowercase
let myName = 'Eliezer'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

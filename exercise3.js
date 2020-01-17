
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.  


// BONUS: Make a program that can subtract, multiply, and also divide!


let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));
let sum = a + b;
let subtract = a - b;
let divide = a / b;
let multiply = a * b;

console.log(sum, subtract, divide, multiply);

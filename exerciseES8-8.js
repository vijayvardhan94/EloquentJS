// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

startLine.lenght //returns 20
turtle.padStart(20);
rabbit.padStart(20);


// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

// returns "🐢======="

let str='';
// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this: 'my name is Rudolf the raindeer'

// Object.keys(obj).forEach((key, index) =>{
//   console.log(key, obj[key]);
// })

for(let key in obj){
  str += key;
  str+=' ';
  str += obj[key]
  str += ' ';
}
console.log(str);


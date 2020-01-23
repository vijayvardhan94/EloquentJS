// change everything below to the newer Javascript!

// let + const

let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

const {firstName,lastName, age, eyeColor} = person;
//like const {a,b,c} = obj;


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

var okObj1 = {a,b,c};

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

var message = `Hello ${firstName} have i met you before? I think we met in ${city} last summer no`;


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

function isValidAge2(age2 = 10){
    return age2;
}

// with arrow functions

const isValidAge3 = (age = 10) => age;
//or

const isValidAge3 = (age = 10) => {
    return age;
}


// Symbol
// Create a symbol: "This is my first Symbol"

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}


const whereAmI2 = (username2, location2) => {
    if(username2 && location2){
        return "I am not lost";
    }
    else {
        return "I am totally lost!"
    }
}
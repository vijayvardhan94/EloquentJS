// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');

//returns false

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons.map((i) =>{
    if (i.includes('John')) {
        return i;

    }
})

//the above code returns undefined values in the array, use filter instead
// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const power100 = (num) =>{
    return num ** 100;
}


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

//running power100 returns infinity


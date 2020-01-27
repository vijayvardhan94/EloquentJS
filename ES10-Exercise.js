// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
console.log(array.flat(2));


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.join());

//use flatmap instead to get a better answer

console.log(greeting.flatMap(i => i.join(" ")));

//this flattens and maps at the same time

// let arr=[];
// for(i in greeting){
//     arr.push(...i);
// }

// for(let i=0;i<greeting.length;i++){
//     for(let j=0;j<greeting[i].length;j++){
//         arr.push(greeting[i][j]);
//     }
// }


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'



//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(40)); 

//or you could also use infinity

console.log(trapped(Infinity));


//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
console.log(userEmail3.trimStart().trimEnd());



//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }

usersArray = console.log(Object.entries(users));

updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])


//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

//use fromEntries to make it from an array to an object

console.log(Object.fromEntries(updatedUsersArray));
var database = [
    {
        username: "andrei",
        password: "secret"
    },

    {
        username: "ingrid",
        password: "supersecret"
    },

    {
        username: "idris",
        password: "verysecret"
    }
];

var newsfeed = [
    {
        username: "vijay",
        timeline: "this is a post"
    },
    {
        username: "sally",
        timeline: "another timeline post"
    }
]

var userNamePrompt = prompt("Enter your username");
var passwordPrompt = prompt("Enter your password");

function isUserValid(user, pass){
    for(var i = 0; i < database.length; i ++){
        if(user === database[i].username && pass === database[i].password)
    {
        return true;
    }
    

    }
    return false;
}

function signIn(user, pass){
   if(isUserValid(user, pass)){
       console.log(newsfeed);
   }
   else{
       alert("wrong details!");
   }
    
}

signIn(userNamePrompt, passwordPrompt);
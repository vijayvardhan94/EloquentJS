
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

//value of a is 3, because a is contained in the local scope of function q1

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

//we first run the function q2, which makes a = 5, and then run q22(), which alerts a = 5


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

//we first run q3() and then run q32(), after which a prints as hello

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

//outputs test

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);

//alerts 5 twice
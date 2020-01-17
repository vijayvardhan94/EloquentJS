//give an example to demonstrate max call stack

//checken and egg problem

function chicken() {
    return egg();
}

function egg() {
    return chicken();
}

//call either of chicken or  egg

chicken();

//you should be getting a range error; max call stack exceeded.
//create a chessboard pattern
let pattern = "# # # #";
let size = 8;
for (let i = 1; i < size; i ++){
    if (i % 2 === 0){
        console.log(pattern);
    } 
    
    else{
        console.log(" " + pattern);
    }
}

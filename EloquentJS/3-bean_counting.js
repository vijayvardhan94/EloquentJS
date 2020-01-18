let bCount = 0;
const countBs = (input_string) =>{
    for(let i = 0; i < input_string.length; i ++){
        if(input_string[i] === "B"){
            bCount +=1;
        }
    }
    console.log(bCount);
}

countBs("BBBb00000000");


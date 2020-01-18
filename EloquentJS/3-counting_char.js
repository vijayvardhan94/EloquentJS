let charCount = 0;
const countCharacters = (input_string, chosen_char) =>{
    for(let i = 0; i < input_string.length; i ++){
        if(input_string[i] === chosen_char){
            charCount +=1;
        }
    }
    console.log(charCount);
}

//countCharacters("KKKKKKKK", "V");


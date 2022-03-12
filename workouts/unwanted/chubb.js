let string = "krishnakayyavula";

let nonRepetiveChar ="";

for (let i =0; i <string.length;i++){
    // let cChar = string.charAt(i);
    if(!string.includes(string.charAt(i))){
        nonRepetiveChar = string[i];
    }
}

console.log(nonRepetiveChar)






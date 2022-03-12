
function nonRepetetiveChar(string){

    let stringLength=string.length;
    let object={};
    for (const char of string) {
            object[char]?object[char]++:object[char]=1;
    }
    console.log(object);
    let keys = Object.keys(object);
    let char="";
    for (let index = 0; index <keys.length; index++) {
        console.log(keys[index])
        if(object[keys[index]]==1) {
            char=keys[index];
            break;
        }
        
    }
    if(char==""){
        return null;
    }
    return char;
}

// console.log(nonRepetetiveChar("VV"))

let company ="Googlllle";

const nonRepetetive=(company)=>{
    let lookUpObject={};
    for (let index = 0; index < company.length; index++) {
        const char = company.charAt(index);
        lookUpObject[char]?lookUpObject[char]++:lookUpObject[char]=1;
    }

    //converting Object into Array and then Looping through it.
    // let array = Object.entries(lookUpObject);
    // let charTobeRetruned=null
    // for (let index = 0; index < array.length; index++) {
    //     const [char,count] = array[index];
    //     if(count==1){
    //         charTobeRetruned =char;
    //         break;
    //     }        
    // }
    // return charTobeRetruned;

}


// console.log(nonRepetetive(company))


let map = new Map();

map.set("a",1)

console.log(map.get("b"))

let object = Object.fromEntries(map)

console.log(object)



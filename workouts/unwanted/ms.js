let array = [12,3,3,4,4,5,6,8];

let updatedArray = [...new Set(array)]
console.log(updatedArray);

let map = new Map([[1,2],[3,4],[5,6],["name","krishna"],["age","26"]]);

console.log(map);

let object = Object.fromEntries(map);
console.log(object)
for (let i in Object.keys(object)){
    console.log(`Object contains  ${Object.keys(object)[i]}`);
    console.log(Object.keys(object))
}


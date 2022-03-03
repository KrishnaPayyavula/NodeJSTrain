const a= require('./a');
console.log(`A at a ${JSON.stringify(a)}`);
let inc=a.x.a++;
module.exports.y={
    a:a.x.a++,
    b:a.x.b
}
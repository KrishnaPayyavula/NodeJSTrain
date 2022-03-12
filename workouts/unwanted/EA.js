// function a() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hello");
//         }, 2000);
//     });
// }

// function b() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("world");
//         }, 3000);
//     });
// }

// async function abc() {
//     // const val1 = await a(); // 2 sec
//     // const val2 = await b(); // 3 sec
//     console.time("start")
//     const [val1,val2] =await Promise.all([a(),b()]);
//     // consoloe(response)
//     console.timeEnd('start')


//     return val1 + " " + val2;   // 2+3 = 5 sec
// }

// abc().then((err,response)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(response)
// })


let obj = {
    x: 1,
    y: 2
};

delete obj.x; // valid

obj.x++; // invalid
console.log(obj);

obj.x = obj.y+1; // invalid

obj.z = obj.x + obj.y; // valid

// obj = {x: 2, y: 3}; // invalid

console.log(obj);


// // a.js
// export const a = {x: 1, y: 2};

// // b.js
// let a = require('./a.js');
// a.x += 1;
// export const b = {x: a.x, y: a.y};

// // main.js
// const a = require('./a.js');
// const b = require('./b.js');
// console.log(a, b); // a: {x: 1, y:2}   b: {x:2, y:2}


// let abc = {
//     x: 1,
//     y: 2
// };

// function inc(obj) {
//     return obj.x++;
// }

// console.log(inc(abc)); // output 2
// console.log(abc); // output {x:2,y:2}


// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 0);

// console.log("3");

// // 1,3,2


// function missingBrackets(str) {
// // TODO: do code here
// }

// missingBrackets("(("); // returns 2
// missingBrackets(")("); // returns 2
// missingBrackets("()("); // returns 1
// missingBrackets(""); // returns 2

// describe("suite",function(){
//     it(("testcase1"),function (){
//         eq(missingBrackets("((")).shouldBeEqual(2);
//     })

//     it(("testcase2"),function (){
//         eq(missingBrackets("(()(")).shouldNotBeEqual(1);
//     })

// })
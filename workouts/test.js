// let a={
//     x:7,
//     y:8
// }

// console.log(a.x++)
// console.log(a)

const performance = require('perf_hooks')
const start=performance.now();


setTimeout(() => {
    console.log("TimeOUT")
}, 3000);

const end = performance.end();

console.log(start-end);
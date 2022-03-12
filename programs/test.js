

// Function to give Min Value from Array
function minimunValueFinder(A){
    return Math.min(...A)
}

// Function to Sum of Array
function sumOfArray (B){
    let sum = B.reduce((partialSum,currentValue)=>partialSum + currentValue, 0);
    return sum;
}


// Function to subsetScore
function subSetScore(A,B){
    return minimunValueFinder(A) * sumOfArray(B)
}

console.log(subSetScore([2,3,4,5],[1,2,3]));
//OutPut : 12 min(A) = 2 * sum(B) = 6  === 12

// Given an array of numbers,
// program to arrange the numbers
// to form the largest number

// A comparison function which
// is used by sort() function in
// printLargest()

function myCompare(X, Y)
{
	// // first append Y at the end of X
    console.log(`x ${X} , y ${Y}`)
	let XY = X + Y;

	// // then append X at the end of Y
	let YX = Y + X;

	// // Now see which of the two
	// // formed numbers is greater
    console.log(`difff ${YX-XY}`)
	return (YX - XY)
}

// The main function that prints
// the arrangement with the
// largest value. The function
// accepts a vector of strings

function printLargest(arr)
{
	
	// Sort the numbers using
	// inbuilt sort function. The
	// function uses our comparison
	// function myCompare() to
	// compare two strings.
	arr.sort(myCompare);
	for(let i = 0; i < arr.length; i++)
	console.log(arr[i])

	// join method creates a string out of the array elements.
	console.log(arr.join(""))
}

// Driver code

let arr = [];

// output should be 6054854654
arr.push("54");
arr.push("546");
arr.push("548");
arr.push("60");
printLargest(arr);




let a=[1,2,0,23,11,"444",-1,20,-25,"01999"];

let c= a.map(Number)

let b=a.sort((a,b)=>~~b-~~a);
console.log(c)




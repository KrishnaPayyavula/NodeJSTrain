/* let a = "banana";

let objOccurence={};

for(let i = 0; i <a.length; i++){
    let currentChar = a.charAt(i);
    
    objOccurence[currentChar] ? objOccurence[currentChar] = objOccurence[currentChar]+1 : objOccurence[currentChar] =1;
    
     
}

console.log(objOccurence) */


let a = [4,5,6,7,8,[6,7,8],1,2,3, [11,12,14]];
let sum= 0;

function arraySum(array){
			let currentSum=0;
      for (let j=0; j<array.length;j++){
      	currentSum+=a[j]
      }      
      return currentSum;    

}

for(let i=0; i<a.length; i ++){
	let currentItem = a[i];
  if(Array.isArray(currentItem)){
  	let result = arraySum(currentItem);
    sum+=result;
  }else{
  	sum+=currentItem;
  }
  
}

console.log(sum)


















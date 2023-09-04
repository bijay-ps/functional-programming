const arr = [1,2,3];
const newArr = [];
// Imperative approach

// for(let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 2)
// }


//Declartive approach
arr.forEach(e => newArr.push(e*2))

console.log(newArr);
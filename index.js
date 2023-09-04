// Concept Pure functions

let counter = 0;

// Impure function, side-effect
function changeCounter() {
    counter = counter + 1;
    console.log('counter: ', counter);
}

changeCounter();

// impure
function test() {
    console.log('This is test');
}

//Pure function
function add(i,j) {
    const result = i + j;
    return result;
}

function sample(k) {
    return k+1
} 

const ab = sample(2);
console.log('ab: ', ab);

const res = add(2,ab);  // 2,3
const res2 = add(4-2, 8-5); // => add(2,3)
console.log(res, res2);


// A function is taking a primitive data type as input
function double(nums) {
    return nums.map(e => e*2)
}

// HOF
function doubleII(nums) {
    return function() {
        return nums.map(e => e*2)
    }
}

const a = doubleII([1,2,3])
console.log(a());

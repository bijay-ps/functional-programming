const person = {
    name: 'Jane Doe',
    age: 30,
    isEmployeed: false
}

// NOT THE PREFFERED WAY, COZ breaking the immutability principle
// function isInterviewCleared(flag) {
//     if(flag) {
//         person.isEmployeed = true;
//     }
//     return person
// }

// console.log(isInterviewCleared(true));

function isInterviewCleared(flag) {
    const copyObj = {...person} // COPYING the 'person' object over here
    if(flag) {
        copyObj.isEmployeed = true;
    }
    console.log('Copied: ', copyObj);
    return copyObj;
}

isInterviewCleared(true);

console.log('Original:', person);
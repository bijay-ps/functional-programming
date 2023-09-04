const person = {
    name: 'Ramesh',
    age: 28
}

const composeFunc = (func1, func2) => x => func1(func2(x))

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)
// ([getFN, captalizeName, addSalutation])

function getFN(user) {
    return user.name;
}

function captalizeName(str) {
    return str.toUpperCase();
}

function addSalutation(str) {
    return `Mr. ${str}`
}

// const getUserNameInUpeprCase = composeFunc(captalizeName,getFN)
// console.log(getUserNameInUpeprCase(person));

// console.log(addSalutation(captalizeName(getFN(person))));
console.log(pipe(getFN, captalizeName, addSalutation)(person))

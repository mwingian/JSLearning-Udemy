'use strict'

// let number = 5; debugger

// function logNumber () {
//     console.log(number); debugger
// };

// logNumber();

// number = 6;

// logNumber();


// let a = 10;

// function myFn() {
//     function innerFn () {
//         console.log(a);
//     };
//     innerFn();
// };

// myFn();


let a,
    b;

function getFunction () {
    let b;
    a = true;
    b = 10;
    console.log(b);
};

getFunction();

console.log(a);
console.log(b);

let output = 0;
let result = 0;

function increaseVariable () {
    output = output + 1;
    return output;
};

function increaseResult () {
    let result = 1;
    return result;
}

console.log(increaseVariable());
console.log(increaseResult());
console.log(result);
console.log(output);

let one;

function changeVariable () {
    let one;
    one = 1;
    return one;
};

console.log(changeVariable());
console.log(one);

let c;

function myFunctionForC () {
    let c;
    c = 10;
    // console.log(c);
    return c;
};

myFunctionForC();

console.log(c);


let info;

function getInfo () {
    let info;
    info = 10;
    return info;
}

function getAnotherInfo () {
    let about = 15;
    return about;
}

// getAnotherInfo();

console.log(getInfo());
console.log(getAnotherInfo());
console.log(info);


// Solution one

function getCount () {
    let counter = 0;

    const innerFunction = function () {
        counter = counter + 1;
        return counter;
    }

    return innerFunction;
}

console.log(getCount());

let increment = getCount();

let variableOne = increment();
let variableTwo = increment();

console.log(variableOne, variableTwo);

// Solution 2 

function getOutput () {
    let timer = 0;

    return function () {
        timer = timer + 1;
        return timer;
    }
}

const itterator = getOutput();

let positionOne = itterator();
let positionTwo = itterator();


console.log(positionOne);
console.log(positionTwo);

// Solution 3

function sendOutputValue() {
    let counter = 0;

    function innerOutputValue () {
        counter++;
        return counter;
    }

    return innerOutputValue;
}

const itterationVariable = sendOutputValue();

let functionHolderOne = itterationVariable();
let functionHolderTwo = itterationVariable();

console.log(functionHolderOne);
console.log(functionHolderTwo);

let massive = [{}, function () {
    return 'Hello world!';
}]


console.log(massive[1]); 

let initialValue = 5;

function getValue () {
    initialValue = 10;

    function getInnerValue () {
        console.log(initialValue);
        return initialValue;
    } 
    getInnerValue();
};

getValue();
console.log(initialValue);

function receiveInfo () {

    alpha = true;
    console.log(alpha);
};

receiveInfo();
console.log(alpha);


console.log(0 || 1);
console.log(0 && 1);
console.log("a" > "b");
console.log(0 || NaN || false || null);


function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const exitValue = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
console.log(exitValue);

let time = '';

(5 > 3 || 2) ? time = 'Day' : time = 'Night';

console.log(time);

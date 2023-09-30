"use strict"
// Объем и площадь полной поверхности куба
// Solution 1;
function calculateVolumeAndArea (number) {
    if (typeof number === 'number' && Number.isInteger(number) === true && number > 0) {
        let volume = Math.pow(number, 3),
        area = 6 * (Math.pow(number, 2));
        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    } else {
        return 'При вычислении произошла ошибка'
    };
};

console.log(calculateVolumeAndAreaNeg(0));
console.log(calculateVolumeAndAreaNeg(-1));
console.log(calculateVolumeAndAreaNeg(25));
console.log(calculateVolumeAndAreaNeg('a'));

// Solution 2;
function calculateVolumeAndAreaNeg (num) {
    if ((typeof num !== 'number' || Number.isInteger(num) === true) && (num <= 0) || Number.isInteger(num) === false) {
        return 'При вычислении произошла ошибка'
    }
    let volume = Math.pow(num, 3),
        area = 6 * (Math.pow(num, 2));
        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Solution 1

function boolToWord(bool) {
    return (bool === true) ? 'Yes' : 'No';
}

console.log(boolToWord('false'));

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// Solution 1

function greet(name){
    return `Hello, ${name} how are you doing today?`
}
console.log(greet('Mik'));
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// Solution 1

const arrayOne = [1,-2,3,4];

// function findAverage(array) {
//     if (array.length !== 0) {
//         let arraySumm = 0,
//             arrayAvg = 0;
//         for (let i = 0; i < array.length; i++) {
//             arraySumm += array[i];
//         }
//         return arrayAvg = arraySumm / array.length;
//     } else {
//         return 0;
//     }
// }
// console.log(findAverage(arrayOne));

let findAverageNew = (array) => {
    return array.length === 0 ? 0 : array.reduce((acc, currentValue) => acc + currentValue, 0) / array.length;
};

console.log(findAverageNew(arrayOne));

// Task 2 (Udemy);

function getCoupeNumber(seatNumber) {
    if (typeof seatNumber !== 'number' || seatNumber % 1 !== 0 || seatNumber < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    };
    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    };
    let coupeNumber = Math.ceil(seatNumber / 4);
    return coupeNumber;
}

console.log(getCoupeNumber(0));
console.log(getCoupeNumber(-1));
console.log(getCoupeNumber(5));
console.log(getCoupeNumber(1.5));


let arr = [1, 2];

function summ (array) {
    let s = 0;
    for (let i = 0; i < array.length; i++) {
        s += array[i];
    }
    return s;
}

console.log(typeof(summ(arr)));


console.log(calculateVolumeAndArea(2.5));

let integerNumber = 25;

console.log(Number.isInteger(integerNumber));

function getPlaceNumber (seatNumber) {
    // Проверка на тип данных и допустимые значения
if (typeof seatNumber !== 'number' || seatNumber % 1 !== 0 || seatNumber < 0) {
    return "Ошибка. Проверьте правильность введенного номера места";
}

if (seatNumber === 0 || seatNumber > 36) {
    return "Таких мест в вагоне не существует";
}

// Определение номера купе
const compartmentNumber = Math.ceil(seatNumber / 4);

return compartmentNumber;
}

let summNumbers = (a, b) => a + b;

console.log(summ(12,14));

const divide = function (a, b) {
    return a / b;
};

console.log(divide(10, 5));

function greet () {
    return "hello world!"
};

console.log(greet());


function numberToString(num) {
    return num.toString();
};

console.log(numberToString(123));
console.log(numberToString(-100));
console.log(typeof(numberToString(123)));
console.log(typeof(num));

// Solution 1
let summation = function (num) {
    let output = 0;
    for (let i = 1; i <= num; i++) {
        output += i;
    };
    return output;
};

console.log(summation(8));

// Solution 2

const summ1 = n => n * (n + 1) / 2;

let str = "string";

console.dir(console);

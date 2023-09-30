// Shallow copies of arrays - slice method;

const array = [1, 'a', true];

const arrayCopy = array.slice();

arrayCopy[2] = false;

console.log(array);
console.log(arrayCopy);

// Spread operator;

const originalArray = ['a', 'b', 'c', 'd'];
const copiedArray = [...originalArray];

originalArray[0] = 0;
copiedArray[0] = 1;

console.log(originalArray);
console.log(copiedArray);

const highLevelArray = [1, 2, 3, ['a', 'b', 'c']];

const lowLevelArray = [...highLevelArray];

console.log(lowLevelArray);


const firstArray = ['adaw', 'wdaw12', 12],
      secondArray = [1, 32, 45676, 6545],
      thirdArray = [true, false],
      summArray = [...firstArray,...secondArray,...thirdArray];

console.log(summArray);



const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let output = '';

    arr.length != 0 ? output = 'Семья состоит из: ' : output = 'Семья пуста';
    arr.forEach(familyMember => output += `${familyMember} `);

    return output;
}

console.log(showFamily(family));

// function showFamily(arr) {
//     if (arr.length > 0) {
//         let str = `Семья состоит из: `;
//         let arrayElem = arr.join(' ');
//         str += arrayElem;
//         return str;
//     } else {
//         return 'Семья пуста';
//     }
// }



console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
     arr.forEach(town => console.log(`${town.toLowerCase()}`));
};

standardizeStrings(favoriteCities);


const someString = 'This is some strange string';
const someNumber = 5;

// function reverse(str) {
//     (typeof(str) === 'string') ? return str.split('').reverse().join('') : return ('Ошибка!');
// }


function reverse1(str) {
    return (typeof(str) == 'string') ? str.split('').reverse().join('') : "Ошибка!";
}

// console.log(reverse1(someString));
console.log(reverse1(someNumber));



console.log(reverse(someString));


let text = 'madam';

function checkPolindrom (str) {
    let textReversed = str.split('').reverse().join('');
    return textReversed === str;
}

console.log(checkPolindrom(text));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//         if (arr.length === 0) {
//             return "Нет доступных валют";
//         }
        
//         if(missingCurr) {
//             let element = arr.indexOf(missingCurr);
//             if (element > -1) {
//                 arr.splice(element, 1);
//             }
//         }

//         let output = 'Доступные валюты:\n';
//         for (let index of arr) {
//             output += index + '\n';
//         }

//         return output;
// };

function availableCurr(arr, missingCurr) {
    let output = '';
    (arr.length === 0) ? output = "Нет доступных валют" : output = "Доступные валюты:\n";
    
    arr.forEach(function (curr, index){
        if (curr !== missingCurr) {
            output += `${curr}\n`;
        }
    });
    return output;
}

console.log(availableCurr(baseCurrencies, 'EUR'));

let arrayOfValues = ['ua', 'eng', 'ru'];

let indexOfValue = arrayOfValues.indexOf('ger');

console.log(indexOfValue);


const objectForCopy = [];

function isEmpty (arr) {
    if (arr.length === 0) {
        return 'Array is empty!'
    } else {
        return 'There are some elements in array!'
    }
}

console.log(isEmpty(objectForCopy));

console.log(objectForCopy);

let b = 10,
    c = 15;

const alphaArray = [0, 4, b, 'text'],
      betaArray = [125,3212, 13131, 'New text', c];

alphaArray[4] = 152;

const summarizeArray = [...alphaArray,...betaArray];

console.log(alphaArray);
console.log(betaArray);
console.log(summarizeArray);
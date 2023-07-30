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

function reverse(str) {

}


let stringOne = 'Text';


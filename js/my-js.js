"use strict";

let numberOfFilms;

initiate();

function initiate() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let a = prompt("Один из последних просмотренных фильмов?", "").trim(),
    b = +prompt("На сколько оцените его?", "");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    console.log("Error");
    i--;
  }
}

function showMyDB() {
  if (personalMovieDB.privat == false) {
    console.log(personalMovieDB);
  } else {
    console.log("Data base is privat!");
  }
}

const obj = {
  name: "Serhii",
  surname: "Zasiienko",
  age: 29,
  isMarried: false,
  skills: {
    programming: "Low",
    languages: ["Js"]
  }
}

let a = 10;
let b = 5;

const calculus = {
  summ:
    function (a, b) {
      return a + b;
    },
  decr: function (a, b) {
      return a - b;
    }
}

console.log(calculus.decr(a,b));

// delete obj.skills.languages;

let count = 0;
let subCount = 0;


for (let property in obj) {
  if (typeof(obj[property]) === 'object') {
    for (let subProperty in obj[property]) {
      console.log(`Свойство ${subProperty} имеет значение ${obj[property] [subProperty]}`);
    }
    subCount++;
  } else {
    console.log(`Свойство ${property} имеет значение ${obj[property]}`);
    count++;
  }
}

console.log(count, subCount);

// obj.skills.languages.push("HTML"); 

console.log(obj);

// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     let d = prompt(`Ваш любимый жанр под номером ${i}?`);
//     personalMovieDB.genre[i - 1] = d;
//   }
// }

// Альтернатива

// function writeYourGenres() {
//   let count = 1;
//   for (let i = 0; i < 3; i++) {
//     let d = prompt(`Ваш любимый жанр под номером ${count}?`);
//     personalMovieDB.genres[i] = d;
//     count++;
//   }
// }

// update*

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i}?`
    );
  }
}

showMyDB();
writeYourGenres();

// Callback`s

function myAge(age, callback) {
  console.log(`Мой возраст: ${age}`);
  callback();
}

function callback() {
  console.log("И у меня дохуя дел!");
}
myAge(29, callback);

// Base calculator via JS functions

// function plus(a, b) {
//   return a + b;
// }

// function minus(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   if (a != 0 && b != 0) {
//     return a * b;
//   } else {
//     console.log("Error");
//   }
// }

// function divide(a, b) {
//   if (a != 0 && b != 0) {
//     return a / b;
//   } else {
//     return Infinity;
//   }
// }

// console.log(divide(0, 3));

// ----------------------------------------------

// My solution

// function sayHello(name) {
//   let greeting = `Привет, ${name}!`;
//   return greeting;
// }

// console.log(sayHello("anton"));

// New solution

// function sayHello(name) {
//   return `Hello, ${name}!`;
// }

// sayHello("Alex");

// My solution

// function returnNeighboringNumbers(number) {
//   let array = [];
//   for (let i = number - 1; i <= number + 1; i++) {
//     array.push(i);
//   }
//   return array;
// }

// console.log(returnNeighboringNumbers(5));

// // New solution

// function returnNeighboringNumbers(n) {
//   return [n - 1, n, n + 1];
// }

// console.log(returnNeighboringNumbers(2));

// 1 Функция должна принимать 2 значения +
// 2 Функция должна возвращать строку (в некоторых случаях число - особый случай)
// 2а В строке числа должны идти по прогрессии, например если число 5, множитель 3 тогда 5 10 15. Также, числа должны разделяться "---", после полследнего
// числа не должно быть черточек
// 2б возврат только одно числа, если множитель равен, меньше нуля или не число

// My solution

// function getMathResult(base, multiplier) {
//   let output = "";
//   let incr = 1;
//   if (!isNaN(multiplier) && multiplier > 0) {
//     for (let i = 0; i < multiplier; i++) {
//       output += base * incr;
//       incr++;
//       for (let j = 0; j < 1; j++) {
//         if (i != multiplier - 1) {
//           output += "---";
//         } else {
//           continue;
//         }
//       }
//     }
//   } else {
//     output = base;
//   }
//   return output;
// }

// console.log(getMathResult(20, "blala"));

// New solution

// function getMathResult(num, times) {
//   if (typeof times !== "number" || times <= 0) {
//     return num;
//   }

//   let str = "";

//   for (let i = 1; i <= times; i++) {
//     if (i === times) {
//       str += `${num * i}`;
//     } else {
//       str += `${num * i}---`;
//     }
//   }
//   return str;
// }

// getMathResult(10, 5);

// let mult = 3;
// let inpt = 5;
// let increaser = 1;

// for (let i = 0; i < mult; i++) {
//   let summ = inpt * increaser;
//   increaser++;
//   console.log(summ);
// }

// Do-while loop example

// let index = 0;

// do {
//   let a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = +prompt("На сколько оцените его?", "");
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     index++;
//   } else {
//     console.log("Error");
//     index--;
//   }
// } while (index < 2);

// While loop example

// let i = 0;

// while (i < 2) {
//   let a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = +prompt("На сколько оцените его?", "");
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     i++;
//   } else {
//     console.log("Error");
//     i--;
//   }
// }

// console.log(personalMovieDB);

// if (personalMovieDB.count <= 10) {
//   console.log("Просмотрено мало фильмов");
// } else if (personalMovieDB.count > 10) {
//   console.log("Вы класический зритель");
// } else if (personalMovieDB.count > 30) {
//   console.log("Вы киноман");
// } else {
//   console.log("Произошла ошибка");
// }

// for (;;) {
//   for (let i = 0; i < 2; i++) {
//     let a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = +prompt("На сколько оцените его?", "");
//     if (a === null || a === "" || a === " " || a.length >= 50) {
//       alert("Error");
//     } else {
//       break;
//     }
//   }
//   personalMovieDB.movies[a] = b;
// }
// console.log();

// first: for (let i = 0; i < 2; i++) {
//   let a = prompt("Один из последних просмотренных фильмов?", ""),
//     b = +prompt("На сколько оцените его?", "");
//   if (a === null || a === " " || a === "" || a.length >= 50) {
//     alert("Error!");
//     return first;
//   } else {
//     personalMovieDB.movies[a] = b;
//   }
// }

// Var 2

// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

// let sum = 0;
// let limit = 100;

// for (let i = 0; i <= limit; i++) {
//   sum += i;
// }

// console.log(sum);

// let number = 10;

// for (let i = 1; i < 11; i++) {
//   let multiplier = number * i;
//   console.log(number + "*" + i + "=" + multiplier);
// }

// let array = ["con", "con1", "con2", "con3"];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// Draw a square: Write a program that takes a number n as input and draws a square of n rows and n columns using asterisks (*). For example, if n is 5, the program should print:

// let n = 5;
// let result = "";

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     result += "*";
//   }
//   result += "\n";
// }

// console.log(result);

// let input = "Hello";

// let output = "";

// for (let i = 0; i < 6; i++) {
//   for (let j = 0; j < i; j++) {
//     output += "*";
//   }
//   output += "\n";
// }
// console.log(output);

// var variable = 10;
// let productID = "#525";
// const imageLength = 1440;

// console.log(imageLength);

// let testText = "This text should be splitted and transformed!";

// function textSplitAndTransform(input) {
//   let output = testText.slice(19).toUpperCase();
//   console.log(output);
//   return;
// }
// textSplitAndTransform(testText);


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// function firstTask() {
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
//   }

//   return result;
// }

// firstTask();

// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// function secondTask() {
//   // Пишем решение вот тут
//   for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === "number") {
//       data[i] *= 2;
//     } else if (typeof(data[i] === 'string')) {
//       data[i] += " - done";
//     }
//   } 
//   // Не трогаем
//   return data;
// }

secondTask();

console.log(data);


const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

// function thirdTask() {
//   let incr = 0;
//   // Пишем решение вот тут
//   for (let i = data.length - 1; i >= 0 ; i-- ) {
//     result[incr] = data[i];
//     incr++;
//   }
//   // Не трогаем
//   return result;
// }

function thirdTask () {
  for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i] 
  }
  return result;
}

thirdTask();

console.log(result);

// const lines = 5;
// let myResult = '';

// for (let i = 0; i <= lines; i++) {
//   for (let j = 0; j < i; j++) {
//     myResult += "*";
//     }
//   myResult += '\n';
// }

// console.log(myResult);


const objectOne = {
  type: "Object",
  size: 24,
  menu: {
    overview: 2,
    location: 3,
    style: 4
  }
} 

let { overview, location, style} = objectOne.menu;

// console.log(overview, location, style);

console.log(objectOne ["menu"]["location"]);

console.log(objectOne);

// let event = "Action";

function primaryFunction (event, callback) {
  console.log(`Случилось событие - ${event}`);
  callback();
}

function callback () {
  console.log("TRATATA");
}

primaryFunction("Action", callback);


const array = [];


for (let i = 0; i <= 20; i++) { 
  array.push(i);
  console.log(array);
}

let arr = [0, 0, 1, 1];


// for (let index of arr) {
//   console.log(index);
// }

arr.forEach(function (value, i, arr) {
  console.log(`${i}:имеет значение ${value} в массиве ${arr}`);
})

let primaryArray = [0, 1];

// primaryArray.push(3);

// console.log(primaryArray[2]);



// function getArrayUpdate (array) {
//   for (let i = 0; i <= 5; i++) {
//     primaryArray.push(i);
//   }
//   return primaryArray;
// }

// getArrayUpdate(primaryArray);

// console.log(primaryArray);

// let ordinaryArray = [0, 1, 5, 10];
// let arraySumm;

// for (let i = 0; i < ordinaryArray.length; i++) {
//   arraySumm =+ ordinaryArray[i];
// }

// console.log(arraySumm);

// let multiplier = prompt("Введите множитель.", "");
const numberToMultiply = 3;

for (let  i = 1;  i <= 10; i ++) {
  const outputValue = multiplier * i;
  console.log(`${multiplier} * ${i} = ${outputValue} `);
}

const arrayToBeReversed = [1, 2, 3, 4, 5];

for (let i = 0; i < arrayToBeReversed.length; i++) {
  
}
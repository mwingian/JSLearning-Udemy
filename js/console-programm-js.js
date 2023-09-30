"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  initiate: function () {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
      while (personalMovieDB.count == "" || personalMovieDB.count === null || isNaN(personalMovieDB.count) || personalMovieDB.count > 50) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  showMyDB: function (hidden) {
    // if (personalMovieDB.privat === false) {
    //   return personalMovieDB;
    // } else {
    //   return "Data base is privat!";
    // }
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  evaluateCount: function () {
    if (personalMovieDB.count < 10) {
      return console.log("Просмотренно довольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      return console.log("Вы классический зритель!");
    } else if (personalMovieDB.count >= 30) {
      return console.log("Вы киноман!");
    }
  },
  getInfoAboutMovies: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Какой последний фильм Вы смотрели?", ""),
          b = +prompt("На сколько Вы его оцениваете?", "");
      
      personalMovieDB.movies[a] = b;
    }
  },
  toggleVisibeMyDB: function () {
    if (personalMovieDB.privat) {
      return personalMovieDB.privat = false;
    } else {
      return personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {

      for (let i = 0; i < 1; i++) {
        let genres = prompt("Укажите ваши любимые жанры кинофильмов через запятую и без пробелов!", "");
        if (genres === "" || genres === null) {
          personalMovieDB.genres = prompt("Укажите ваши любимые жанры кинофильмов через запятую и без пробелов!", "");
          i--;
        } else {
          personalMovieDB.genres = genres.split(",");
          personalMovieDB.genres.sort();
        }
      };

      // let output = '';
      // personalMovieDB.genres.forEach(function(element, index){
      //   output += `Любимый жанр № ${index+1} - это ${element}!\n`;
      // });
      // return output; 

      personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр № ${i+1} - это ${item}!`);
      }) 
  }
};

let result;
let a = () => { result = "a"; return false; }
let b = () => { result = "b"; return true; }
console.log(a() || b());

function someFunction() {
  console.log('First message!')
}

function anotherFunction () {
  console.log('Second message!')
}
let wariable = false;
console.log(wariable && (someFunction() || anotherFunction()));

let c;

console.log(!!c !== c);
console.log(!!c !== !!c);
console.log(!c);
// Если переменная объявлена, но значение не задано при добавлении инверсии 
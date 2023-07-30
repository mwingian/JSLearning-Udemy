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
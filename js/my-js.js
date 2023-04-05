"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let questionOne = prompt("Один из последних просмотренных фильмов?", ""),
  questionTwo = prompt("На сколько оцените его?", ""),
  questionThree = prompt("Один из последних просмотренных фильмов?", ""),
  questionFour = prompt("На сколько оцените его?", "");

let movieName = questionOne,
  secondMovieName = questionThree;

personalMovieDB.movies[movieName] = questionTwo;
personalMovieDB.movies[secondMovieName] = questionFour;

// personalMovieDB.movies = {
//   questionOne: questionTwo,
//   questionThree: questionFour,
// };

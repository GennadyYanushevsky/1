const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних фильмов, который вы смотрели?", ""),
      b = prompt("На сколько оцените данный фильм?", ""),
      c = prompt("Один из последних фильмов, который вы смотрели?", ""),
      d = prompt("На сколько оцените данный фильм?", "");




      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;

      console.log(personalMovieDB);
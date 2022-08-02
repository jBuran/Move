

const numberOfFlilms = +prompt("How many films did u watch?", "")

const personalMovieDB = {
   count: numberOfFlilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const a = prompt("Your last watched films?", ""),
   b = prompt("Rate this film:", ""),
   d = prompt("Your last watched films?", ""),
   c = prompt("Rate this film:", "")

personalMovieDB.movies[a] = b;
personalMovieDB.movies[d] = c;
console.log(personalMovieDB)
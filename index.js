

const numberOfFlilms = +prompt("How many films did u watch?", "")

const personalMovieDB = {
   count: numberOfFlilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

for (let i = 0; i < 2; i++) {
   const a = prompt("Your last watched films?", ""),
      b = prompt("Rate this film:", "");

   personalMovieDB.movies[a] = b;
}


console.log(personalMovieDB)
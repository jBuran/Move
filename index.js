

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
   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done')
    }
    else{
      console.log('error');
      i--;
    }
 
}


console.log(personalMovieDB)
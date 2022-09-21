
const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
   start: function () {
      personalMovieDB.count = +prompt("How many films did u watch?", "")

      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt("How many films did u watch?", "")
      }
   },
   rememberMyfilms: function () {
      for (let i = 0; i < 2; i++) {
         const a = prompt("Your last watched films?", "").trim()
         b = prompt("Rate this film:", "");
         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done')
         }
         else {
            console.log('error');
            i--;
         }
      }
   },
   detectPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
         console.log('few movie u watch');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         console.log('good');
      } else if (personalMovieDB.count >= 30) {
         console.log('cool');
      } else {
         console.log('error');
      }
   },
   showMyDB: function (hidden) {
      if (!hidden) {
         console.log(personalMovieDB)
      }
   },
   toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      }
      else {
         personalMovieDB.privat = true;
      }
   },
   writeYourGenres: function () {
      for (let i = 1; i < 2; i++) {
         let genre = prompt(`Ваш любимый жанр под номером ${i}`);

         if (genre === '' || genre == null) {
            console.log('Вы ввели некорректные данные или не ввели их вовсе');
            i--;
         } else {
            personalMovieDB.genres[i - 1] = genre;
         }
         // Альтернативный вариант из урока
         // let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
         // if (genres === '' || genres == null) {
         //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
         //     i--;
         // } else {
         //     personalMovieDB.genres = genres.split(', ');
         //     personalMovieDB.genres.sort();
         // } 
      }
      personalMovieDB.genres.forEach((item, i) => {
         console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
   }
};

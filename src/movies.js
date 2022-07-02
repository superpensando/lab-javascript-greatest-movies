const movies = require('../src/data');
//console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(function (movie) {
     return movie.director;
  });
  return allDirectors; 
}
// Bonus indexof()
//console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
/*function howManyMovies(moviesArray) {
  if (!moviesArray) { return 0; }
  else {
    let count = 0; 
    const moviesSpielberg = moviesArray.filter(function (movie) {
        if (movie.director === 'Steven Spielberg') {
          movie.genre.forEach(function(genre1){ 
             if (genre1 === "Drama") {
              count++; 
             }
          });
        }
    });
    return count;
  }
}*/
//console.log(howManyMovies(movies)); ==> 4

// Optimization: is not necesary foreach, exists method includes()
// Optimization: is not necessary let count, like is the same array you can calculate the lenght of the array. 
function howManyMovies(moviesArray) {
  if (!moviesArray) { return 0; }
  else {
    const moviesSpielberg = moviesArray.filter(function (movie) {
        if ((movie.director === 'Steven Spielberg') && (movie.genre.includes("Drama"))) {
           return movie; 
        }
    });
    const moviesSpielbergLength=moviesSpielberg.length;
    return moviesSpielbergLength;
  }
}
console.log(howManyMovies(movies));

// Tampoco hace falta el let count, como no crea un nuevo array, con el lenght es suficiente. 


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const moviesLength=moviesArray.length; 
  if (moviesLength > 0) {
    const scoresAverageMovies = moviesArray.reduce(function (sum, movie) {
      if (typeof movie.score === "number")  {
        return (sum + movie.score);
      } else {
        return 1;
      }
    }, 0); // initialValue to 0
    const scoresAverageMoviesTotal=(scoresAverageMovies/moviesLength).toFixed(2);
     return (parseFloat(scoresAverageMoviesTotal));
  } else {
    return 0;
  }
}
console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}

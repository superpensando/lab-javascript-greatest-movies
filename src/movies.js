const movies = require('../src/data');
//console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.

/*function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(function (movie) {
     return movie.director;
  });
  return allDirectors; 
}*/
//console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {

  const moviesArrayLength = moviesArray.length;
  if (moviesArrayLength > 0 ) {
    let allDirectorsNotRepeated = [];
    for (let i = 0; i < moviesArrayLength  ; i++) {
        //indexOf returns -1 if dont' exists in array
        if (allDirectorsNotRepeated.indexOf(moviesArray[i].director) === -1 ) {
          allDirectorsNotRepeated.push(moviesArray[i].director); //If the word exists, dont' push in the new array. 
        }
    }
    return allDirectorsNotRepeated;
  } else {
    return null; 
  }

}

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
//console.log(howManyMovies(movies)); ==> 4 (it works)

// Optimization: is not necesary foreach, exists method includes().
// Optimization: is not necessary let count, is the same array you can calculate the lenght of the array. 

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
//console.log(howManyMovies(movies));

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
//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray) { return 0; }
  else {
    const moviesDrama = moviesArray.filter(function (movie) {
        if ( movie.genre.includes("Drama")) {
           return movie; 
        }
    });
    const moviesDramaLength=moviesDrama.length;
    const scoresAverageDramaMovies = moviesDrama.reduce(function (sum, moviesDrama) {
        return (sum + moviesDrama.score);
    }, 0); // initialValue to 0

    const dramaMoviesScoreTotal=(scoresAverageDramaMovies/moviesDramaLength).toFixed(2);
    return (parseFloat(dramaMoviesScoreTotal));
  }
 
}
//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortMoviesYearTitle = moviesArray.sort(function (a, b) {
     return (a.year - b.year || a.title.localeCompare(b.title)); //==> Order by year & then by title
  });
  const newMoviesArray=[...sortMoviesYearTitle ];
  return newMoviesArray;
}
//console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortMoviesTitle = moviesArray.sort(function (a, b) {
      return  a.title.localeCompare(b.title);
    });
    const sortMoviesTitle20 = sortMoviesTitle.splice(0,20);
    const sortMoviesTitle20Final = sortMoviesTitle20.map(function (movie) {
      return movie.title;
   });
   return sortMoviesTitle20Final;
}
//console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

  let moviesArrayDurationNew = moviesArray.map(function (movie) {

      let moviesDurationNew= movie.duration.split(" ");
      let moviesArrayHoursMinutes;
      let moviesArrayMinutes;
      //Hours
      if (moviesDurationNew[0] !== "undefined") {
          let moviesArrayHoursLength= moviesDurationNew[0].length;
          moviesArrayHoursMinutes = moviesDurationNew[0].slice(0,moviesArrayHoursLength-1)*60;
          //console.log(moviesArrayHoursMinutes);
      } else {
          moviesArrayHoursMinutes=0;
      }
      // Minutes
      if ( typeof (moviesDurationNew[1]) !== "undefined") {
          let moviesArrayMinutesLength= moviesDurationNew[1].length;
          moviesArrayMinutes= moviesDurationNew[1].slice(0, moviesArrayMinutesLength-3);      
          //console.log(moviesArrayMinutes);
      } else {
          moviesArrayMinutes=0; 
      }
     
      movie.duration = Number(moviesArrayHoursMinutes) + Number(moviesArrayMinutes); 

      return movie; 
     
  }); 
  let moviesArrayNew =[... moviesArrayDurationNew ]
  return moviesArrayNew;
}
//console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
// Classmate solution - TODO test that works
function bestYearAvg(moviesArray) {
    let bestYearAvg = (arr) => {
      if (arr.length === 0) return null;
      let bestYearAvg = { year: 0, avg: 0 };
      let yearsMapped = [];
      arr
        .map((movie) => movie.year)
        .forEach((year) => {
          if (!yearsMapped.includes(year)) {
            yearsMapped.push(year);
          }
        });
      yearsMapped.forEach((year) => {
        //Get all movies for year
        let moviesOfYear = arr.filter((movie) => {
          return movie.year === year;
        });
        //Calc Avg of year movies
        let yearAvg = moviesOfYear.reduce((acc, movie) => {
          acc += movie.score / moviesOfYear.length;
          return acc;
        }, 0);
        //Compare values
        if (yearAvg > bestYearAvg.avg) {
          bestYearAvg.avg = yearAvg;
          bestYearAvg.year = year;
        } else if (yearAvg === bestYearAvg.avg) {
          if (bestYearAvg.year > year) {
            bestYearAvg.year = year;
          }
        }
      });
      return `The best year was ${bestYearAvg.year} with an average score of ${bestYearAvg.avg}`;
    };
}
console.log(bestYearAvg(movies));



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

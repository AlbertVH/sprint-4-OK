// Exercise 1: Get the array of all directors.
// MAP //

function getAllDirectors(movies) {
  let result = movies.map((movie) => {
    return movie.director;
  });
  console.log('EXERCISE 1 -> ', result);
  return result;
}

// Exercise 2: Get the films of a certain director
// FILTER //

function getMoviesFromDirector(movies, director) {
  let result = movies.filter((movie) => {
    return movie.director === director; //return si el director coincide
  });
  console.log('EXERCISE 2 -> ', result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
// REDUCE //

function moviesAverage(movies) { //función genérica calcular media
  if (movies.length === 0) return 0;
  if (movies.length === 1) return movies[0].score;

  let result = movies.reduce((prev, movie) => {
    // (prev_item, item)
    return prev.score + movie.score; //total este + anterior
  });

  return result / movies.length; //total scores entre total de películas
}

function moviesAverageOfDirector(movies, director) {
  const moviesFromDirector = getMoviesFromDirector(movies, director);

  return moviesAverage(moviesFromDirector); //combinar funciones anteriores
}

// Exercise 4:  Alphabetic order by title
// SORT //

function orderAlphabetically(movies) {
  let result = [...movies].sort((a, b) => {
    //... copia todo el array //(item, item)
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
    //SORT, para (a<b) devuelve  -1, o bien cero, o bien 1
  });

  return result.map((movie) => movie.title).slice(0, 20);
  //slice pilla los 20 primeros caracteres
}

// Exercise 5: Order by year, ascending
// SORT //

function orderByYear(movies) {
  let result = [...movies].sort((a, b) => {
    const res = a.year - b.year; //sub-resultado

    if (res === 0) {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    }

    return res;
  });

  return result;
}

// Exercise 6: Calculate the average of the movies in a category
// FILTER (+ REDUCE del exercise 3) //
//(Como el ex.3, pero con categorías)

function moviesAverageByCategory(movies, genre) {
  const result = movies.filter(
    (movie) => movie.genre.includes(genre) && typeof movie.score === 'number'
  ); //score debe ser un número

  return moviesAverage(result);
}

// *** NIVELL 2 ***
// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}

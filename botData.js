const films = [
];

 const addFilm = function (film) {
     films.push(film);
     console.log(films)
 }

 const getFilms = function () {
     return films
 }

module.exports.addFilm = addFilm;
module.exports.getFilms = getFilms;
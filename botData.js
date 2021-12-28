const films = [];

 const addFilm = function (film) {
     films.push(film);
     console.log(films)
 }

module.exports.addFilm = addFilm;

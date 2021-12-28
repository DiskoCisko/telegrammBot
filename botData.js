const films = [
];

 const addFilm = function (film) {
     films.push(film);
     console.log(films)
 }

 const getFilms = function () {
     return films
 }

 const randomeFilm = function () {
    return (films.length>0)?films[Math.ceil(Math.random()*films.length - 1)]:"В списке нет фильмов"
 }
module.exports.addFilm = addFilm;
module.exports.getFilms = getFilms;
module.exports.randomeFilm = randomeFilm;
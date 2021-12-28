const {  Markup} = require('telegraf')
const { ADD_FILM, GET_FILMS, DELETE_FILM, RANDOME_FILM } =require('./botCommand')

const getMainMenu = function () {
    return Markup.keyboard([
        [ADD_FILM, GET_FILMS],
        [DELETE_FILM, RANDOME_FILM]
    ]).resize()
}

 const yesNoKeyboard = function () {
    return Markup.inlineKeyboard([
        Markup.button.callback('Да', 'yes'),
        Markup.button.callback('Нет', 'no')
    ], {columns: 2})
}

module.exports.getMainMenu = getMainMenu;
module.exports.yesNoKeyboard = yesNoKeyboard;
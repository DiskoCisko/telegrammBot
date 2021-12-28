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
        Markup.callbackButton('Да', 'yes'),
        Markup.callbackButton('Нет', 'no')
    ], {columns: 2}).extra()
}

module.exports.getMainMenu = getMainMenu;

require('dotenv').config()

const { Telegraf, session} = require('telegraf')

const { getMainMenu, yesNoKeyboard } = require('./keyboard')
const { ADD_FILM, GET_FILMS, DELETE_FILM, RANDOME_FILM } =require('./botCommand')
const { addFilm, getFilms, randomeFilm, deleteFilm } = require('./botData');

const deleteReg = /^Удалить\s(\D*)(\s\D*)?(\s\d*)?$/;

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.use(session())
bot.start((ctx) => {
    ctx.reply('Welcome', 
    getMainMenu()
    )
})
bot.hears(ADD_FILM, ctx => {
 ctx.reply('Введите название фильма')
})
bot.hears(GET_FILMS, ctx => {
    const film = getFilms()
    if (film.length>0) {
        const filmItem = film.reduce((item, acc)=> {
            return acc +`\n\n` + item
        });
        ctx.replyWithHTML(
            `Список фильмов:\n\n`+
            `${filmItem}`,
        )
    } else {
       ctx.replyWithHTML(
            `В вашем списке нет фильмов`
        ) 
    }
})
bot.hears(RANDOME_FILM, ctx => {
    const films = randomeFilm()
    console.dir(films)
    ctx.replyWithHTML(
           films
        )
})

bot.hears(DELETE_FILM, ctx => {
getFilms()
 ctx.replyWithHTML('Введите фразу <i>"удалить `название фильма`"</i>, чтобы удалить ,' + 'например, <b>"удалить Титаник"</b>:')
})
bot.hears(deleteReg , ctx => {
 const film = ctx.message.text.slice(8)
    deleteFilm(film)
    ctx.reply('Фильм удалён')
})
bot.on('text', ctx => {
    ctx.session = { film: ctx.message.text }
    ctx.replyWithHTML(
        `Вы действительно хотите добавить фильм:\n\n`+
        `<i>${ctx.message.text}</i>`,
        yesNoKeyboard()
    )
})
bot.action(['yes', 'no'], ctx => {
 if (ctx.callbackQuery.data === 'yes') {
        addFilm(ctx.session.film)
        ctx.editMessageText('Фильм успешно добавлен')
    } else {
        ctx.deleteMessage()
    }
})
bot.launch();
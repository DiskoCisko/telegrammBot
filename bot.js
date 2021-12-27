require('dotenv').config()

const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => {
    console.dir(ctx.update)
    ctx.reply('Hey there' + ctx.update.message.from.first_name)}
    )
bot.launch()
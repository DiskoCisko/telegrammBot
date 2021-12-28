
require('dotenv').config()

const { Telegraf} = require('telegraf')

const { getMainMenu } = require('./keyboard')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => {
    ctx.reply('Welcome', 
    getMainMenu()
    )
})
bot.hears('hi', (ctx) => {
    const str = 'ctx'
    // ctx.replyWithHTML(`<input />`)
    console.dir(str.slice(2))
    // ctx.reply('Hey there '+ ctx.state +' '+ ctx.update.message.from.first_name)
}
    )
bot.launch()
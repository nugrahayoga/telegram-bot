const { Telegraf } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply('Bot is running'))
bot.on('text', (ctx) => {
	ctx.reply(`Bot is running`)
})
bot.launch()
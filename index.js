const dotenv = require('dotenv')
const Telegraf = require('telegraf')

dotenv.config()

const token = process.env.BOT_TOKEN
const bot = new Telegraf(token)

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('I don\'t know anything yet, but we will learn together today 😊'))

bot.launch().then(() => {
  console.log('Bot is started')
})

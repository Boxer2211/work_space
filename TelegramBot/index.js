const TelegramApi = require('node-telegram-bot-api'); // импорт модуля
const Telgraf = require('telegraf')
const token = '6039296455:AAHoDNwJZstHuE22SxStD4fBGpBDF_08sg8' //  t.me/Ksu_shopp_bot
const bot = new TelegramApi(token, {polling:true})
const instaLink = 'https://instagram.com/ksu.shopp?igshid=YmMyMTA2M2Y='

const Options = { //инлайн кнопки
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Верхній одяг', callback_data: 'Верхній одяг'}, {text: 'Взуття', callback_data: 'Взуття'}],
            [{text: 'Джинси', callback_data: 'Джинси'}, {text: 'Футболки', callback_data: 'Футболки'}]
        ]
})
}

const OptionsMenu = { // обычные кнопки меню
    reply_markup: JSON.stringify({
        keyboard: [
            [{text: 'Категорії'}, ],
            [{text: 'Головне меню'}, {text: 'Контакти', callback_data: 'Контакти'}]
        ],
        resize_keyboard: true
})}

const OptionsMain = { // кнопка главное меню
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Головне меню', callback_data: 'Головне меню'}]
        ]
})
}

const StartMenu = async(chatId) => {
    bot.sendMessage(chatId,`Вітаємо в нашому Телеграм Боті! 
    Приєднуйтесь до нас в Інстаграмі ${instaLink}
    Наш сайт (В розробці)
    Оберіть розділ який Вас цікавить`, OptionsMenu)
}
const Category = async(chatId) => {
    bot.sendMessage(chatId,`Оберіть категорію, яку бажаєте переглянути`, Options)
}
const Contacts = async(chatId) => {
    bot.sendMessage(chatId,`м. Дніпро, вул. Барикадна 1а
моб. +380972399266
${instaLink}`, OptionsMain)
}

const start = () => {

    // bot.setMyCommands([
    //     {command: '/start', description: 'Начальная страница'}
    // ])
    
    bot.on('message', async msg => { //слушатель события для текст
        const text = msg.text;
        const chatId = msg.chat.id;

        console.log(msg);

        if (text === '/start'){
            return StartMenu(chatId)
        } else if (text === 'Категорії'){
            return Category(chatId)
        }
        else if (text === 'Головне меню'){
            return StartMenu(chatId)
        }
        else if (text === 'Контакти'){
            return Contacts(chatId)
        }

        return bot.sendMessage(chatId, `Я вас не розумію, оберіть пункт меню`)
    })

    bot.on('callback_query', async msg => { //слушатель события для ДАТА
        const data = msg.data;
        const chatId = msg.message.chat.id;
        if (data === 'Головне меню'){
            return StartMenu(chatId)
        } 
        else {
          return bot.sendMessage(chatId, `Ви обрали категорію ${data}
${instaLink}`,OptionsMain)
        }
    })

}

start()
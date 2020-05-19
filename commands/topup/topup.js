const Markup = require('telegraf/markup');
const config = require('../config');

const topup = async (ctx) => {
    const msg = 'Silahkan pilih produk';
    const keyboard = Markup.keyboard(config.topup).resize().extra();

    return await ctx.reply(msg, keyboard);
}

module.exports = { topup };
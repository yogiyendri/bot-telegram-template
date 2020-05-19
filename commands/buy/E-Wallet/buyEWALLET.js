const Markup = require('telegraf/markup');
const config = require('../../config');

const buyEWALLET = async (ctx) => {
    const msg = 'Pilih salah satu menu';
    const keyboard = Markup.keyboard(config.buyeWallet).resize().extra();

    return await ctx.reply(msg, keyboard);
}

module.exports = { buyEWALLET };
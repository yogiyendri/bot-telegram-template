const Markup = require('telegraf/markup');
const config = require('../../config');

const topupEWALLET = async (ctx) => {
    const msg = 'Pilih salah satu menu';
    const keyboard = Markup.keyboard(config.topupeWallet).resize().extra();

    return await ctx.reply(msg, keyboard);
}

module.exports = { topupEWALLET };
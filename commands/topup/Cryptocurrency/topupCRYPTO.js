const Markup = require('telegraf/markup');
const config = require('../../config');

const topupCRYPTO = async (ctx) => {
    const msg = 'Pilih salah satu menu';
    const keyboard = Markup.keyboard(config.topupcrypto).resize().extra();

    return await ctx.reply(msg, keyboard);
}

module.exports = { topupCRYPTO };
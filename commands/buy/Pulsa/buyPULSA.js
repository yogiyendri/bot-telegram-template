const Markup = require('telegraf/markup');
const config = require('../../config');

const buyPULSA = async (ctx) => {
    const msg = 'Pilih salah satu menu';
    const keyboard = Markup.keyboard(config.buypulsa).resize().extra();

    return await ctx.reply(msg, keyboard);
}

module.exports = { buyPULSA };
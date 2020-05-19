const Markup = require('telegraf/markup');
const config = require('../../config');

const topupPULSA = async (ctx) => {
    const msg = 'Pilih salah satu menu';
    const keyboard = Markup.keyboard(config.topuppulsa).resize().extra();

    return await ctx.reply(msg, keyboard);
}

module.exports = { topupPULSA };
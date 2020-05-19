const Markup = require('telegraf/markup');
const config = require('../../config');

const buyCRYPTO = async (ctx) => {
    const msg = 'Pilih salah satu menu';
    const keyboard = Markup.keyboard(config.buycrypto).resize().extra();

    return await ctx.reply(msg, keyboard);
}

module.exports = { buyCRYPTO };
const Markup = require('telegraf/markup');
const config = require('../config');

const buyVOUCHER = async (ctx) => {
    const msg = 'Sabar ya, fitur ini masih dalam pengembangan 😊';

    const keyboard = Markup.keyboard(config.buyVOC).resize().extra();

    return await ctx.reply(msg, keyboard);
}

module.exports = { buyVOUCHER };
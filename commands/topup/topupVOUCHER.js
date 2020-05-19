const Markup = require('telegraf/markup');
const config = require('../config');

const topupVOUCHER = async (ctx) => {
    const msg = 'Sabar ya, fitur ini masih dalam pengembangan 😊';

    const keyboard = Markup.keyboard(config.topupVOC).resize().extra();

    return await ctx.replyWithMarkdown(msg, keyboard);
}

module.exports = { topupVOUCHER };
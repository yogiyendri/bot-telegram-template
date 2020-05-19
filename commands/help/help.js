const help = async (ctx) => {
    const msg = 'Sabar ya, fitur ini masih dalam pengembangan 😊';

    const keyboard = Markup.keyboard(config.help).resize().extra();

    return await ctx.replyWithMarkdown(msg, keyboard);
}

module.exports = { help };
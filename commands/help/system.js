const system = async (ctx) => {
    const msg = 'Sabar ya, fitur ini masih dalam pengembangan 😊';

    return await ctx.reply(msg);
}

module.exports = { system };
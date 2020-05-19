const { BOT_USERNAME, VERSION } = process.env;

const about = async (ctx) => {

    const msg = `*### Tentang ###*\n🤖 Bot name: @${BOT_USERNAME}\n🎉 Version: ${VERSION}\n👨‍💻 Powered by: @yogiyendri`;

    return await ctx.sendMessage(msg);
}

module.exports = { about };
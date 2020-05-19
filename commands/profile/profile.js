const Markup = require('telegraf/markup');
const config = require('../config');

const profile = async (ctx) => {
    const fromId = ctx.from.id;
    const msg = `*### Detail profil ###*` +
    `\n🆔 ID: ${fromId}` +
    `\n👤 Nama: null` +
    `\n✉️ E-Mail: null` +
    `\n💰 Lv: 0` +
    `\n💵 Saldo: Rp. 0` +
    `\n\n Silahkan lakukan verifikasi terlebih dahulu.`;

    const keyboard = Markup.keyboard(config.profile).resize().extra();

    return await ctx.replyWithMarkdown(msg, keyboard);
}

module.exports = { profile };

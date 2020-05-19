// Get environment variables
require('dotenv').config();

const Telegraf = require('telegraf')

const { start, back, useVOUCHER } = require('./commands/');
const { buy, buyVOUCHER } = require('./commands/buy');
const { buyCRYPTO, buyDOGE, buyETH, buyLTC } = require('./commands/buy/Cryptocurrency');
const { buyEWALLET, buyDANA, buyGOPAY, buyOVO } = require('./commands/buy/E-Wallet');
const { buyPULSA, buySIMPATI, buyAS, buy3, buyXL, buyAXIS, buyINDOSAT } = require('./commands/buy/Pulsa');
const { topup, topupVOUCHER } = require('./commands/topup');
const { topupCRYPTO, topupDOGE, topupETH, topupLTC } = require('./commands/topup/Cryptocurrency');
const { topupPULSA, topupSIMPATI, topupAS, topup3, topupXL, topupAXIS, topupINDOSAT } = require('./commands/topup/Pulsa');
const { topupEWALLET, topupDANA, topupGOPAY, topupOVO } = require('./commands/topup/E-Wallet');
const { profile, editprofile } = require('./commands/profile');
const { help, group, channel, about, system } = require('./commands/help');

const { BOT_TOKEN, BOT_USERNAME } = process.env;

const bot = new Telegraf(BOT_TOKEN, { username: BOT_USERNAME });

bot.start(start)

bot.hears('🛒 Beli', buy)
    .hears('✅ Cryptocurrency', buyCRYPTO)
    .hears('✅ ETH', buyETH)
    .hears('✅ LTC', buyLTC)
    .hears('✅ DOGE', buyDOGE)
    .hears('✅ VOC Indodax', buyVOUCHER)
    .hears('✅ Pulsa', buyPULSA)
    .hears('✅ SimPATI', buySIMPATI)
    .hears('✅ Kartu As', buyAS)
    .hears('✅ 3', buy3)
    .hears('✅ XL', buyXL)
    .hears('✅ AXIS', buyAXIS)
    .hears('✅ INDOSAT', buyINDOSAT)
    .hears('✅ E-Wallet', buyEWALLET)
    .hears('✅ DANA', buyDANA)
    .hears('✅ OVO', buyOVO)
    .hears('✅ GO-Pay', buyGOPAY)
    .hears('💳 Topup', topup)
    .hears('🟢 Cryptocurrency', topupCRYPTO)
    .hears('🟢 ETH', topupETH)
    .hears('🟢 LTC', topupLTC)
    .hears('🟢 DOGE', topupDOGE)
    .hears('🟢 VOC Indodax', topupVOUCHER)
    .hears('🟢 Pulsa', topupPULSA)
    .hears('🟢 SimPATI', topupSIMPATI)
    .hears('🟢 Kartu As', topupAS)
    .hears('🟢 3', topup3)
    .hears('🟢 XL', topupXL)
    .hears('🟢 AXIS', topupAXIS)
    .hears('🟢 INDOSAT', topupINDOSAT)
    .hears('🟢 E-Wallet', topupEWALLET)
    .hears('🟢 DANA', topupDANA)
    .hears('🟢 OVO', topupOVO)
    .hears('🟢 GO-Pay', topupGOPAY)
    .hears('👤 Profil', profile)
    .hears('⚙️ Edit Profile', editprofile)
    .hears('🌟 Voucher', useVOUCHER)
    .hears('ℹ️ Bantuan', help)
    .hears('👥 Group', group)
    .hears('📢 Channel', channel)
    .hears('❕ Tentang', about)
    .hears('🖥 Sistem', system)
    .hears('⬅️ Batalkan', back)

bot.startPolling();

bot.launch()

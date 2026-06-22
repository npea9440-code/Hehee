const mineflayer = require('mineflayer');

function start() {
    const bot = mineflayer.createBot({
        host: 'SuperSMP-h1dN.aternos.me', // IP Aternos của bạn
        port: 31866,                      // Port Aternos của bạn
        username: 'BotTreoNgonLanh',      // Tên bot
        version: '1.21.1',                // Phải đúng phiên bản server
        auth: 'offline'                   // Bắt buộc cho server free
    });

    bot.on('spawn', () => {
        console.log("Bot da vao game!");
    });

    bot.on('error', (err) => {
        console.log("Loi:", err);
    });

    bot.on('end', () => {
        console.log("Bot bi disconnect, dang thu lai...");
        setTimeout(start, 5000);
    });
}

start();

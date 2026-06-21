const mineflayer = require('mineflayer');
const http = require('http');

// Web server để Render không bị tắt
http.createServer((req, res) => {
    res.end("Bot is running");
}).listen(process.env.PORT || 3000);

function startBot() {
    const bot = mineflayer.createBot({
        host: 'SuperSMP-h1dN.aternos.me',
        port: 31866,
        username: 'BotTreoNgonLanh',
        version: '1.21.11',
        auth: 'offline'
    });

    bot.on('spawn', () => console.log('Bot da vao game'));
    bot.on('error', (err) => console.log('Loi:', err));
    bot.on('end', () => setTimeout(startBot, 5000));
}

startBot();

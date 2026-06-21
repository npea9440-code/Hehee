const mineflayer = require('mineflayer');
const http = require('http');

http.createServer((req, res) => {
    res.end("Bot is running");
}).listen(process.env.PORT || 3000);

function createBot() {
    console.log("Bat dau ket noi vao server...");
    const bot = mineflayer.createBot({
        host: 'SuperSMP-h1dN.aternos.me',
        port: 31866,
        username: 'BotTreoNgonLanh',
        version: '1.21.1',
        auth: 'offline'
    });

    bot.on('spawn', () => console.log('>>> Bot da vao game!'));
    bot.on('error', (err) => console.log('>>> LOI:', err));
    bot.on('end', () => setTimeout(createBot, 5000));
}

// Dòng cuối cùng phải là gọi hàm này
createBot();

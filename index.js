const mineflayer = require('mineflayer');
const http = require('http');

// 1. Tạo một web server nhỏ để Render không báo lỗi
http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
}).listen(process.env.PORT || 3000);

// 2. Code con bot của bạn
function createBot() {
    const bot = mineflayer.createBot({
        host: 'SuperSMP-h1dN.aternos.me',
        port: 31866,
        username: 'BotTreoNgonLanh',
        version: '1.21.1',
        auth: 'offline'
    });

    bot.on('spawn', () => {
        console.log('Da vao game thanh cong');
    });

    bot.on('end', () => {
        console.log('Bot bi mat ket noi, dang khoi dong lai...');
        setTimeout(createBot, 5000);
    });
}

createBot();

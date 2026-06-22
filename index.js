const mineflayer = require('mineflayer');
const http = require('http');

// 1. Mở cổng để Render nhận diện dịch vụ đang chạy
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
    res.end("Bot is online");
}).listen(port, () => {
    console.log(`Web server dang chay tren port ${port}`);
});

// 2. Khởi tạo bot Minecraft
function start() {
    const bot = mineflayer.createBot({
        host: 'SuperSMP-h1dN.aternos.me',
        port: 31866,
        username: 'BotTreoNgonLanh',
        version: '1.21.1',
        auth: 'offline'
    });

    bot.on('spawn', () => console.log('>>> Bot da vao game!'));
    bot.on('error', (err) => console.log('>>> Loi:', err));
    bot.on('end', () => setTimeout(start, 5000));
}

start();

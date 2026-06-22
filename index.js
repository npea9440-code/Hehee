const mineflayer = require('mineflayer');
const http = require('http');

// 1. Web server để Render luôn Live
http.createServer((req, res) => {
    res.end("Bot is alive");
}).listen(process.env.PORT || 3000);

// 2. Định nghĩa hàm start
function start() {
    console.log("Bat dau ket noi...");
    const bot = mineflayer.createBot({
        host: 'SuperSMP-h1dN.aternos.me',
        port: 31866,
        username: 'BotTreoNgonLanh',
        version: '1.21.11',
        auth: 'offline'
    });
    
    bot.on('spawn', () => console.log('Bot da vao game!'));
    bot.on('error', (err) => console.log(err));
    bot.on('end', () => setTimeout(start, 5000));
}

// 3. Dòng này là "nút khởi động" - BẮT BUỘC PHẢI CÓ
createbot();
start(); 

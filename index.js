const mineflayer = require('mineflayer');
const http = require('http');

// 1. Tạo web server để Render báo "Live"
http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
  res.end("Bot is running");
}).listen(process.env.PORT || 3000);

// 2. Hàm tạo bot với đầy đủ log thông báo
function createBot() {
    console.log("Bat dau ket noi vao server...");
    const bot = mineflayer.createBot({
        host: 'SuperSMP-h1dN.aternos.me',
        port: 31866,
        username: 'BotTreoNgonLanh',
        version: '21.1.1',
        auth: 'offline'
    });
function start() {
  const bot = mineflayer.createBot({
    host: 'SuperSMP-h1dN.aternos.me',
    port: 31866,
    username: 'BotTreoNgonLanh',
    version: '1.21.11',
    auth: 'offline'
  });

    bot.on('spawn', () => {
        console.log('>>> Bot da vao game thanh cong!');
    });

    bot.on('login', () => {
        console.log('>>> Bot da dang nhap vao server!');
    });

    bot.on('error', (err) => {
        console.log('>>> LOI KET NOI:', err);
    });

    bot.on('end', (reason) => {
        console.log('>>> Bot bi dis (ly do:', reason, '), dang ket noi lai sau 5s...');
        setTimeout(createBot, 5000);
    });
  bot.on('spawn', () => console.log('Bot vao game'));
  bot.on('end', () => setTimeout(start, 5000));
  bot.on('error', (err) => console.log(err));
}

createBot();
start();

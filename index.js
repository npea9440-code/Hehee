const mineflayer = require('mineflayer');
const http = require('http');

// 1. Tạo Web Server để Render luôn Live
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Bot is working!');
}).listen(process.env.PORT || 3000);

function start() {
    console.log("Dang ket noi vao server...");
    const bot = mineflayer.createBot({
        host: 'SuperSMP-h1dN.aternos.me',
        port: 31866,
        username: 'BotTreoNgonLanh',
        version: '1.21.11', // Đảm bảo phiên bản này trùng với server Aternos
        auth: 'offline',
        checkTimeoutInterval: 60000 // Tăng thời gian chờ để không bị timeout sớm
    });

    bot.on('spawn', () => {
        console.log('Bot da vao game va san sang!');
        // Tự động nhảy mỗi 20 giây để server thấy bot đang hoạt động
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 20000);
    });

    bot.on('death', () => bot.emit('respawn')); // Tự hồi sinh

    bot.on('end', (reason) => {
        console.log('Bot bi vang! Ly do:', reason, '. Dang ket noi lai sau 5s...');
        setTimeout(start, 5000);
    });

    bot.on('error', (err) => {
        console.log('Loi ket noi:', err);
    });
}

start();

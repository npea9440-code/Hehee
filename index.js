const mineflayer = require('mineflayer');
const http = require('http');

// Giữ cho Render luôn Live
http.createServer((req, res) => { res.end("Bot is active"); }).listen(process.env.PORT || 3000);

function createBot() {
    const bot = mineflayer.createBot({
        host: 'SuperSMP-h1dN.aternos.me',
        port: 31866,
        username: 'BotTreoNgonLanh',
        version: '1.21.11',
        auth: 'offline'
    });

    bot.on('spawn', () => {
        console.log('Bot da vao game');
        // Tự động di chuyển nhẹ mỗi 30 giây để tránh bị kick
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 30000);
    });

    // Tự động hồi sinh nếu bot bị chết
    bot.on('death', () => {
        bot.emit('respawn');
    });

    // Tự động kết nối lại nếu bị văng
    bot.on('end', () => {
        console.log('Bot bi vang, dang ket noi lai sau 5s...');
        setTimeout(createBot, 5000);
    });

    bot.on('error', (err) => {
        console.log('Loi:', err);
    });
}

createBot();
}

createBot();

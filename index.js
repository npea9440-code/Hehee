const mineflayer = require('mineflayer');
const http = require('http');

// 1. Tạo Web Server (Để Render giữ dịch vụ luôn Live)
http.createServer((req, res) => {
    res.end("Bot is alive!");
}).listen(process.env.PORT || 3000);

// 2. Hàm tạo bot
function createBot() {
    console.log("--- DANG KHOI TAO KET NOI ---");
    
    const bot = mineflayer.createBot({
        host: 'SuperSMP-h1dN.aternos.me', // IP Server của bạn
        port: 31866,                      // Port Server của bạn
        username: 'BotTreoNgonLanh',      // Tên bot
        version: '1.21.1',                // Đổi thành phiên bản server của bạn
        auth: 'offline'                   // Dùng cho server cracked
    });

    bot.on('spawn', () => {
        console.log(">>> BOT DA VAO GAME THÀNH CÔNG!");
        // Anti-AFK: Nhảy mỗi 20 giây
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 20000);
    });

    bot.on('kicked', (reason) => {
        console.log(">>> BOT BI KICK, LY DO:", reason);
    });

    bot.on('error', (err) => {
        console.log(">>> LOI KET NOI:", err);
    });

    bot.on('end', (reason) => {
        console.log(">>> KET NOI BI DONG. THU LAI SAU 10S...");
        setTimeout(createBot, 10000);
    });
}

// 3. Khởi chạy bot
createBot();

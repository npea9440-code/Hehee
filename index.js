const mineflayer = require('mineflayer');
const http = require('http');

// Mở web server để Render không bị tắt
http.createServer((req, res) => {
    res.end("Bot active");
}).listen(process.env.PORT || 3000);

console.log("Bat dau chuong trinh...");

function startBot() {
    console.log("Dang khoi tao bot...");
    
    const bot = mineflayer.createBot({
        host: 'SuperSMP-h1dN.aternos.me',
        port: 31866,
        username: 'BotTreoNgonLanh',
        version: '1.21.1',
        auth: 'offline'
    });

    // Lắng nghe mọi sự kiện lỗi chi tiết
    bot.on('login', () => console.log("Bot da dang nhap!"));
    bot.on('spawn', () => console.log("Bot da vao the gioi!"));
    bot.on('kicked', (reason) => console.log("Bot bi kick, ly do:", reason));
    bot.on('error', (err) => console.log("Loi ket noi (Error):", err));
    bot.on('end', (reason) => {
        console.log("Ket noi ket thuc, thu lai sau 10s. Ly do:", reason);
        setTimeout(startBot, 10000);
    });
}

// Bắt đầu
try {
    startBot();
} catch (e) {
    console.log("Loi nghiem trong:", e);
}

    bot.on('end', (reason) => {
        console.log(">>> KET NOI BI DONG. THU LAI SAU 10S...");
        setTimeout(createBot, 10000);
    });
}

// 3. Khởi chạy bot
createBot();

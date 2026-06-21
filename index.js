const mineflayer = require('mineflayer');
const http = require('http');

// 1. TẠO CỔNG WEB ĐỂ RENDER KIỂM TRA (GIÚP KHÔNG BỊ TIMED OUT)
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot Minecraft dang hoat dong 24/7!\n');
});

// Render cung cấp cổng thông qua biến process.env.PORT, bắt buộc phải dùng nó
const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
    console.log(`[Render] Cong web phu dang chay tai port: ${PORT}`);
});

// 2. CẤU HÌNH BOT MINECRAFT
const config = {
    host: 'SuperSMP-h1dN.aternos.me:31866',
    port: 31866,
    username: 'BotTreo247', // Đã đổi tên viết liền để tránh lỗi cache
    version: '1.21.1',
    auth: 'offline',
    checkTimeoutInterval: 60000
};

function createBot() {
    console.log('[Bot] Dang ket noi den server Minecraft...');
    const bot = mineflayer.createBot(config);

    bot.on('spawn', () => {
        console.log('[Bot] Da vao game thanh cong va bat dau treo!');
    });

    bot.on('disconnect', (packet) => {
        console.log('[Bot] Bi mat ket noi. Dang thu ket noi lai...');
    });

    bot.on('error', (err) => {
        console.log('[Bot] Gap loi he thong: ', err);
    });

    // Tự động kết nối lại nếu bị server kick out
    bot.on('end', () => {
        console.log('[Bot] Ket noi ket thuc. Thu lai sau 30 giay...');
        setTimeout(createBot, 30000);
    });
}

// Chạy kích hoạt bot
createBot();
    // Lỗi 1: Hiện thông báo khi vào game thành công
    bot.on('spawn', () => {
        console.log('[Bot] =======> DA VAO GAME THANH CONG VA BAT DAU TREO! <=======');
    });

    // Lỗi 2: Tự động kết nối lại khi server Aternos bị sập hoặc restart
    bot.on('end', () => {
        console.log('[Bot] Bi ngat ket noi khoi server. Dang cho 30 giay de tu dong ket noi lai...');
        setTimeout(createBot, 30000); // 30 giây sau tự vào lại
    });

    // Lỗi 3: Bắt các lỗi hệ thống để tránh làm sập dự án Render
    bot.on('error', (err) => {
        console.log('[Bot] He thong gap loi nho: ', err.message);
        if (err.code === 'ECONNREFUSED') {
            console.log('[Bot] Server dang Offline hoac sai Port. Se thu lai sau 30s...');
        }
    });
}

// Kích hoạt chạy bot
createBot();

    bot.on('error', (err) => {
        console.log('[Bot] Gap loi he thong: ', err);
    });

    // Tự động kết nối lại nếu bị server kick out
    bot.on('end', () => {
        console.log('[Bot] Ket noi ket thuc. Thu lai sau 30 giay...');
        setTimeout(createBot, 30000);
    });
}

// Chạy kích hoạt bot
createBot();

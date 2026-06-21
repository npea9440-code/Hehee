const mineflayer = require('mineflayer');
const http = require('http');

// 1. TẠO CỔNG WEB PHỤ ĐỂ KHÔNG BỊ TIMED OUT TRÊN RENDER
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot Minecraft dang hoat dong nho cong nghe Render Web Service!\n');
});

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
    console.log(`[Render] Cong web phu dang chay tai port: ${PORT}`);
});

// 2. CẤU HÌNH KẾT NỐI ĐẾN SERVER ATERNOS
// LƯU Ý: Thay đổi số '31866' thành số Port mới nhất trên web Aternos của bạn nếu server vừa mở lại nhé!
const config = {
    host: 'SuperSMP-h1dN.aternos.me',
    port: 31866, 
    username: 'BotTreoNgonLanh', // Đổi tên hoàn toàn mới để xóa sạch lỗi cache cũ trên Aternos
    version: '1.21.1',
    auth: 'offline',
    checkTimeoutInterval: 60000 // Tự động kiểm tra nếu đường truyền bị nghẽn
};

let bot;

function createBot() {
    // Nếu có bot cũ đang chạy kẹt, xóa bỏ nó trước khi tạo kết nối mới
    if (bot) {
        bot.removeAllListeners();
    }

    console.log('[Bot] Dang tien hanh ket noi den server Minecraft...');
    bot = mineflayer.createBot(config);

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

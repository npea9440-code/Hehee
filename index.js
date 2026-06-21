const mineflayer = require('mineflayer');

// Cấu hình thông tin server Aternos của bạn ở đây
const config = {
    host: 'TenServerCuaBan.aternos.me', // <--- THAY BẰNG IP SERVER CỦA BẠN
    port: 25565,                         
    username: 'Bot_Treo_247',           // Tên con bot trong game
    version: '1.20.1'                    // <--- THAY BẰNG PHIÊN BẢN SERVER CỦA BẠN
};

function createBot() {
    console.log(`[Bot] Đang kết nối tới ${config.host}...`);

    const bot = mineflayer.createBot({
        host: config.host,
        port: config.port,
        username: config.username,
        version: config.version
    });

    bot.on('spawn', () => {
        console.log(`[Bot] Đã vào game thành công!`);
        bot.chat('Bot 24/7 đã online.');
    });

    bot.on('end', (reason) => {
        console.log(`[Bot] Mất kết nối (${reason}). Thử lại sau 30s...`);
        setTimeout(createBot, 30000);
    });

    bot.on('error', (err) => {
        console.error(`[Lỗi] ${err.message}`);
    });

    // Nhảy mỗi 60s để đỡ bị tính AFK
    setInterval(() => {
        if (bot && bot.entity) {
            bot.setControlState('jump', true);
            setTimeout(() => {
                bot.setControlState('jump', false);
            }, 500);
        }
    }, 60000);
}

createBot();

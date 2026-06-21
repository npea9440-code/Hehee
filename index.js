const mineflayer = require('mineflayer');
const http = require('http');

// 1. TẠO CỔNG WEB PHỤ ĐỂ ĐÁNH LỪA RENDER KHÔNG KHỞI ĐỘNG LẠI
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot Minecraft dang chay 24/7!\n');
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`[Render] Cong web phu da mo tai cong ${PORT}`);
});

// 2. CẤU HÌNH BOT KHỚP VỚI SERVER MINECRAFT CỦA BẠN
const config = {
    host: 'SuperSMP-h1dN.aternos.me', 
    port: 31866,                      
    username: 'Bot_Treo_247',           
    version: '1.21.1',                
    auth: 'offline'                   
};

function createBot() {
    console.log(`[Bot] Dang ket noi toi ${config.host}:${config.port}...`);

    const bot = mineflayer.createBot({
        host: config.host,
        port: config.port,
        username: config.username,
        version: config.version,
        auth: config.auth
    });

    bot.on('spawn', () => {
        console.log(`[Bot] Da vao game thanh cong!`);
    });

    bot.on('end', (reason) => {
        console.log(`[Bot] Mat ket noi (${reason}). Thu lai sau 30s...`);
        setTimeout(createBot, 30000);
    });

    bot.on('error', (err) => {
        console.error(`[Loi] ${err.message}`);
    });

    // Nhảy mỗi 60s để không bị kick vì AFK
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
    });

    bot.on('end', (reason) => {
        console.log(`[Bot] Mat ket noi (${reason}). Thu lai sau 30s...`);
        setTimeout(createBot, 30000);
    });

    bot.on('error', (err) => {
        console.error(`[Loi] ${err.message}`);
    });

    // Nhảy mỗi 60s để tránh bị tính AFK
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
        if (bot && bot.entity) {
            bot.setControlState('jump', true);
            setTimeout(() => {
                bot.setControlState('jump', false);
            }, 500);
        }
    }, 60000);
}

createBot();

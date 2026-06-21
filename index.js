const mineflayer = require('mineflayer');
const http = require('http');

// 1. TAO CONG WEB PHU DE RENDER KHONG SAP
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot Minecraft online 24/7!\n');
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`[Render] Cong phu chay tai cong: ${PORT}`);
});

// 2. CAU HINH BOT MINECRAFT
const config = {
    host: 'SuperSMP-h1dN.aternos.me', 
    port: 31866,                      
    username: 'Bot_Treo_247',           
    version: '1.21.1',                
    auth: 'offline'                   
};

function createBot() {
    console.log(`[Bot] Dang ket noi den server...`);
    const bot = mineflayer.createBot(config);

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

    // Tu dong nhay moi 60s tranh AFK
    setInterval(() => {
        if (bot && bot.entity) {
            bot.setControlState('jump', true);
            setTimeout(() => { bot.setControlState('jump', false); }, 500);
        }
    }, 60000);
}

createBot();

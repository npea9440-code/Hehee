const mineflayer = require('mineflayer');
const http = require('http');

http.createServer((req, res) => {
    res.end("Bot is alive");
}).listen(process.env.PORT || 3000);

function createBot() {
    console.log("--- BAT DAU KET NOI ---");
    const bot = mineflayer.createBot({
        host: 'SuperSMP-h1dN.aternos.me',
        port: 31866,
        username: 'BotTreoNgonLanh',
        version: '1.21.1',
        auth: 'offline'
    });

    bot.on('login', () => console.log(">>> BOT DA LOG IN"));
    bot.on('spawn', () => console.log(">>> BOT DA SPAWN"));
    bot.on('kicked', (reason) => console.log(">>> BOT BI KICK, LY DO:", reason));
    bot.on('error', (err) => console.log(">>> LOI KET NOI:", err));
    bot.on('end', () => {
        console.log(">>> KET NOI BI DONG, THU LAI SAU 10S");
        setTimeout(createBot, 10000);
    });
}

createBot();

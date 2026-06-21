const mineflayer = require('mineflayer');
const http = require('http');

http.createServer((req, res) => {
  res.end("Bot active");
}).listen(process.env.PORT || 3000);

function createBot() {
    const bot = mineflayer.createBot({
        host: 'SuperSMP-h1dN.aternos.me',
        port: 31866,
        username: 'BotTreoNgonLanh',
        version: '1.21.11',
        auth: 'offline'
    });
    bot.on('error', (err) => console.log(err));
    bot.on('end', () => setTimeout(createBot, 5000));
}
createBot();
    console.log("Loi nghiem trong:", e);
}

    bot.on('end', (reason) => {
        console.log(">>> KET NOI BI DONG. THU LAI SAU 10S...");
        setTimeout(createBot, 10000);
    });
}

// 3. Khởi chạy bot
createBot();

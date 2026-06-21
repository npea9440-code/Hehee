const mineflayer = require('mineflayer');
const http = require('http');

http.createServer((req, res) => {
  res.end("Bot is running");
}).listen(process.env.PORT || 3000);

function start() {
  const bot = mineflayer.createBot({
    host: 'SuperSMP-h1dN.aternos.me',
    port: 31866,
    username: 'BotTreoNgonLanh',
    version: '1.21.11',
    auth: 'offline'
  });

  bot.on('spawn', () => console.log('Bot vao game'));
  bot.on('end', () => setTimeout(start, 5000));
  bot.on('error', (err) => console.log(err));
}

start();

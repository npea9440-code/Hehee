const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'SuperSMP-h1dN.aternos.me',
  port: 31866,
  username: 'BotTreoNgonLanh',
  version: '1.21.1',
  auth: 'offline'
});

bot.on('spawn', () => {
  console.log('Da vao game thanh cong');
});

bot.on('end', () => {
  console.log('Bot bi mat ket noi, dang tu khoi dong lai...');
  process.exit(1); 
});

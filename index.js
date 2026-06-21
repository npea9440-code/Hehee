const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'SuperSMP-h1dN.aternos.me',
  port: 31866, // Dùng đúng số Port hồi chiều bạn đã dùng
  username: 'BotTreoNgonLanh',
  version: '1.21.1'
});

bot.on('spawn', () => {
  console.log('Bot da vao game!');
});

bot.on('error', (err) => {
  console.log('Loi roi:', err);
});

bot.on('end', () => {
  console.log('Bot bi dis, dang ket noi lai...');
  setTimeout(() => {
    process.exit(1); // Lệnh này giúp Render tự khởi động lại quy trình
  }, 5000);
});

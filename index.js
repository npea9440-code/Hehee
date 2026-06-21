const config = {
    host: 'SuperSMP-h1dN.aternos.me', // BẮT BUỘC xóa dấu hai chấm và số 31866 ở đây đi
    port: 25565,                      // Đổi thành số cổng gốc mặc định này
    username: 'BotTreoNgonLanh', 
    version: '1.21.1',
    auth: 'offline',
    checkTimeoutInterval: 60000 
};

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

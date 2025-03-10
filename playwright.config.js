module.exports = {
    use: {
        headless: true, // Запускать тесты в headless-режиме
        viewport: { width: 1280, height: 720 }, // Разрешение экрана для тестов
        ignoreHTTPSErrors: true, // Игнорировать ошибки SSL
    },
    reporter: 'html', // Формат отчета
};

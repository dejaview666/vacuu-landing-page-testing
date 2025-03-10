import { test, expect } from '@playwright/test';

test('landing page test', async ({ page }) => {
    // Открыть страницу
    await page.goto('https://polis812.github.io/vacuu/');

    // Собрать все ссылки
    const links = await page.$$eval('a', links => links.map(link => link.href));

    // Проверить только HTTP/HTTPS ссылки
    for (let link of links) {
        if (link.startsWith('http://') || link.startsWith('https://')) {
            const response = await page.goto(link);
            expect(response.status()).toBe(200);
        } else {
            console.log(`Skipping non-HTTP link: ${link}`);
        }
    }
});
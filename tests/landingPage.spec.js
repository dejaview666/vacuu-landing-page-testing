import { test, expect } from '@playwright/test';

test('landing page test', async ({ page }) => {
    // Открыть страницу
    await page.goto('https://polis812.github.io/vacuu/');

    // Получаем все ссылки на странице
    const links = await page.$$eval('a', links => links.map(link => link.href));

    // Проходим по всем ссылкам и проверяем их, исключая ссылки с телефоном
    for (let link of links) {
        if (!link.startsWith('tel:')) { // Игнорируем ссылки с телефонными номерами
            const response = await page.goto(link);
            expect(response.status()).toBe(200);
        }
    }

    // Логика для работы с элементами страницы
    const arrowElement = page.locator('span.arrow-right.arrow-enable');
    const reviewAuthor = page.locator('div.review__author', { hasText: 'Jennifer Troyer' });

    // Кликаем на стрелку и проверяем, что элемент исчез
    await arrowElement.click();
    await expect(reviewAuthor).not.toBeVisible();
});

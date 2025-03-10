import { test, expect } from '@playwright/test';

test('landing page test', async ({ page }) => {
    // Открыть страницу
    await page.goto('https://polis812.github.io/vacuu/');

    // Получить все ссылки на странице, фильтруя "tel:" и "mailto:"
    const links = await page.$$eval('a', links =>
        links
            .map(link => link.href)
            .filter(href => !href.startsWith('tel:') && !href.startsWith('mailto:'))
    );

    // Пройти по каждой ссылке и проверить её статус
    for (let link of links) {
        const response = await page.goto(link);
        expect(response.status()).toBe(200);
    }

    // Пример действия с элементом стрелки
    const arrowElement = page.locator('span.arrow-right.arrow-enable');
    const reviewAuthor = page.locator('div.review__author', { hasText: 'Jennifer Troyer' });
    await arrowElement.click();
    await expect(reviewAuthor).not.toBeVisible();
});

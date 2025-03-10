import { test, expect } from '@playwright/test';

test('landing page test', async ({ page }) => {

    await page.goto('https://polis812.github.io/vacuu/');


    const links = await page.$$eval('a', links => links.map(link => link.href));


    for (let link of links) {
        if (!link.startsWith('tel:')) {
            const response = await page.goto(link);
            expect(response.status()).toBe(200);
        }
    }


    const arrowElement = page.locator('span.arrow-right.arrow-enable');
    const reviewAuthor = page.locator('div.review__author', { hasText: 'Jennifer Troyer' });


    await arrowElement.click();
    await expect(reviewAuthor).not.toBeVisible();
});

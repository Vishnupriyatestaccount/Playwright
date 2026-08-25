const { test, expect } = require('@playwright/test');

test('Handle dropdown', async ({ page }) => {

    await page.goto('https://demoqa.com/select-menu');

    await page.locator('#react-select-2-input').fill('Group 2, option 1');

    await page.waitForSelector('//div[contains(@class,"option")]');

    const options = await page.locator('//div[contains(@class,"option")]').all();

    for (const option of options) {

        const text = await option.textContent();

        if (text.trim() === 'Group 2, option 1') {
            await option.click();
            break;
        }
    }

});
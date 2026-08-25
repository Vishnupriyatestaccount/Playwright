import {test, expect} from '@playwright/test';

test("Verify that title till be TTA CART", async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/')
});
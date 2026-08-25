// async function getTestResut(){
//     return "Pass"

// }

// getTestResut().then(function(result){
// console.log(result);
// });

import {test,expect}    from "@playwright/test";

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');   
  await expect(page).toHaveTitle(/Playwright/);
}); 

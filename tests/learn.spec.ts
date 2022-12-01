import test from "@playwright/test";

test.only('this is my first test case', async ({page}) => {
    await page.goto('https://www.google.com')
    

    
})
import test, { chromium, expect } from "@playwright/test";


test(`Test to launch a browser`, async ()=>{


    //browser
    //context
    //page
    const browser1 = await chromium.launch({channel:"msedge",headless:false});
    const context = await browser1.newContext();
    const page = await context.newPage();
    await page.goto(`https://leafground.com/input.xhtml`);
     //const statusLocator =   page.locator(`//input[@id='j_idt88:j_idt93']`);
     const statusLocator =   page.locator(`//input[contains(@class,'city ui-state-filled')]`);
     await expect(statusLocator).toBeDisabled();
    const statusText = await statusLocator.innerText();
    console.log(statusText);
    
})

     
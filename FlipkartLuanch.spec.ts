import test, {  webkit } from "@playwright/test";
test(`Test to launch a browser`, async ()=>{
    const browser = await webkit.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`https://www.redbus.in `);
const url = page.url();
 console.log(url);

})
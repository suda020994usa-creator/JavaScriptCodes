import test, { chromium, expect } from "@playwright/test";
test(`Test to launch a browser`, async ()=>{
    //browser
    //context
    //page
    const browser = await chromium.launch({channel:"msedge",headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`#username`).fill(`Demosalesmanager`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`.decorativeSubmit`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//a[contains(text(),'CRM/SF')]`).click();
    await page.locator(`//a[text()='Leads']`).click();
    await page.locator(`//a[text()='Find Leads']`).click();
    await page.locator(`//input[@id='ext-gen248']`).fill(`Sudarshan`);
    await page.locator(`//button[text()='Find Leads']`).click();
    await page.locator(`//a[text()='11634']`).click();
    await page.locator(`//a[text()='Edit']`).click();
    await page.locator(`//input[@id='updateLeadForm_companyName']`).fill(`TCS`);
    await page.locator(`#updateLeadForm_firstName`).fill(`Sruthi`);
    await page.locator(`#updateLeadForm_personalTitle`).fill(`Doctor`);
    await page.locator(`#updateLeadForm_lastName`).fill(`Srinivasan`);
    await page.locator(`//input[@value='Update']`).click();
    const statusLocator =   await page.locator(`#updateLeadForm_firstName`)
     await expect(statusLocator).toHaveValue(`Sruthi`);
     const statuslocator2 = await page.locator(`updateLeadForm_lastName`)
     await  expect(statuslocator2).toHaveValue(`Srinivasan`)
})
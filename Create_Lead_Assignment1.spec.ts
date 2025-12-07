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
   // await page.waitForTimeout(3000);
    await page.locator(`//a[text()='Leads']`).click();
    await page.locator(`//a[text()='Create Lead']`).click();
   // await page.waitForTimeout(3000);
    await page.locator(`//input[@id='createLeadForm_companyName']`).fill(`jpmc`);
    //await page.waitForTimeout(3000);
   //await expect(page.locator(`#createLeadForm_firstName`)).toHaveValue(`Sudar`);
    //await expect(page.locator(`#createLeadForm_firstName`)).toBeEditable();

    await page.locator(`//input[@id='createLeadForm_firstName']`).fill(`Sudar`);
     const statusLocator =   await page.locator(`#createLeadForm_firstName`)
     await expect(statusLocator).toHaveValue(`Sudar`);
    await page.locator(`//input[@id='createLeadForm_personalTitle']`).fill(`Software Engineer`);
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill(`Narayanan`);
    await page.selectOption(`#createLeadForm_dataSourceId`,{value:`LEAD_COLDCALL`})
    await page.locator(`//input[@id='createLeadForm_generalProfTitle']`).fill(`RockStar`);
    await page.locator(`//input[@id='createLeadForm_departmentName']`).fill(`Quality Assurance`);
    await page.locator(`//input[@id='createLeadForm_primaryPhoneNumber']`).fill(`9456987654`);
    await page.locator(`//input[@id='createLeadForm_annualRevenue']`).fill(`899999`);
    await page.locator(`//input[@name='submitButton']`).click();
     //await page.waitForTimeout(3000);
     //await expect(page.locator(`#createLeadForm_firstName`)).toHaveValue(`Sudarshan`);
    // await expect(page.locator(`//input[@id='createLeadForm_lastName']`)).toHaveValue(`Narayanan`);
    //await expect(page.locator(`//input[@id='createLeadForm_companyName']`)).toHaveValue(`Mphasis`);
     const title = await page.title();
     console.log(title);    
})

     
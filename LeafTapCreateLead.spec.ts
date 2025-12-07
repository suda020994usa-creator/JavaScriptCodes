import test, { chromium } from "@playwright/test"
import { log } from "console";

test(`Test launches browser`, async () => {
const browser = await chromium.launch({channel:"msedge",headless:false});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto(`http://leaftaps.com/opentaps/control/main`);
const url = page.url();
 console.log(url);
 await page.locator(`#username`).fill(`Demosalesmanager`);
 await page.locator(`#password`).fill(`crmsfa`);
 await page.locator(`.decorativeSubmit`).click();
 await page.waitForTimeout(3000);
 await page.locator(`//a[contains(text(),'CRM/SF')]`).click();
 await page.waitForTimeout(3000);
 await page.locator(`//a[contains(text(),'Leads')]`).click();
 await page.locator(`//a[contains(text(),'Create Lead')]`).click();
 await page.locator(`//input[@name='accountName']`).fill(`Sudarshan`);
 



})
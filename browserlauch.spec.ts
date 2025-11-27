

import test, { chromium } from "@playwright/test"
import { log } from "console";

test(`Test launches browser`, async () => {
const browser = await chromium.launch({channel:"msedge",headless:false});
const context = await browser.newContext();
const page = await context.newPage();
await page.goto(`http://leaftaps.com/opentaps/control/main`);
const url = page.url();
 console.log(url);

})

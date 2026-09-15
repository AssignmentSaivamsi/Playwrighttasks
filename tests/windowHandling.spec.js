import {test} from '@playwright/test'

test('Handling Window', async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.flipkart.com/')
    await page.locator('(//input[@name="q"])[1]').fill('iphone 16')
    await page.keyboard.press('Enter')

    const [newPage] = await Promise.all([context.waitForEvent('page'),page.click('//a[@target="_blank"]')])

    await newPage.waitForLoadState()
    const title = await newPage.title()
    console.log(title)
    



})
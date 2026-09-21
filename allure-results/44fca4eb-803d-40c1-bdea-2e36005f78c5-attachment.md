# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dynamicXpath.spec.js >> Dynamic Handling
- Location: tests\dynamicXpath.spec.js:2:5

# Error details

```
Error: page.goto: SSL peer certificate or SSH remote key was not OK
Call log:
  - navigating to "https://www.flipkart.com/", waiting until "load"

```

# Test source

```ts
  1  | import {test} from '@playwright/test'
  2  | test('Dynamic Handling', async({browser})=>{
  3  |     const context = await browser.newContext()
  4  |     const page = await context.newPage()
  5  | 
> 6  |     await page.goto('https://www.flipkart.com/')
     |                ^ Error: page.goto: SSL peer certificate or SSH remote key was not OK
  7  |     await page.locator('(//input[@name="q"])[1]').fill('iphone 16')
  8  |     await page.keyboard.press('Enter')
  9  | 
  10 |     const [newPage] =await Promise.all([context.waitForEvent('page'),page.click('//div[text()="Relevance"]//ancestor::div[@id ="container"]//parent::div[@data-id="MOBH4DQFWJVDRSHM"]//descendant::a[@target="_blank"]')])
  11 | await newPage.waitForLoadState()
  12 | const title = await newPage.title()
  13 | console.log(title)
  14 | })
```
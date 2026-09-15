import {test} from '@playwright/test'
test('Handling Frame', async({page})=>{
    await page.goto('https://vinothqaacademy.com/iframe/')
 //FRAME
const singleFrame = await page.frameLocator('//iframe[@name="employeetable"]')
await singleFrame.locator('//input[@id="roleInput"]').fill('Software engineer')
await singleFrame.locator('//input[@id="nameInput"]').fill('sai vamsi')
//Alert-Box
await page.once('dialog', async(dialog)=>{
await dialog.accept()
console.log("Simple alert:", dialog.message())
})
await singleFrame.locator('//button[@id="addBtn"]').click()
//Check-Box
await singleFrame.locator('(//input[@type="checkbox"])[4]').check()
await singleFrame.locator('(//input[@type="checkbox"])[5]').check()
await singleFrame.locator('//button[@id="deleteBtn"]').click()

})
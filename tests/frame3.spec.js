import {test} from '@playwright/test'
test('Handling Frame', async({page})=>{
    await page.goto('https://vinothqaacademy.com/iframe/')

    const singleFrame = await page.frameLocator('//form[@id="registration-1"]')
    
    await page.once('dialog', async(dialog)=>{
        await dialog.accept()
        console.log("Simple alert :", dialog.message('Registration Form'))
    })
//await singleFrame.locator('//label[@for="vfb-5"]').fill(Sai)
//await singleFrame.locator('//label[@for="vfb-7"]').fill(vamsi)


})
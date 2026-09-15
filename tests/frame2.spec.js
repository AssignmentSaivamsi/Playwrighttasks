import {test} from '@playwright/test'
test('Frame Handling', async({page})=>{
    await page.goto('https://vinothqaacademy.com/iframe/')

    //Frame
    const singleFrame = await page.frameLocator('//iframe[@name="popuppage"]')
    //simple alert
    await page.once('dialog', async(dialog)=>{
        await dialog.accept()
        console.log("Simple alert :", dialog.message())
    })
    await singleFrame.locator('//button[@name="alertbox"]').click()
    //confirmation alert
    await page.once('dialog', async(dialog)=>{
        await dialog.dismiss()
        console.log("Confirmation alert:", dialog.message())
    })
    await singleFrame.locator('//button[@name="confirmalertbox"]').click()
    //prompt alert
   await page.once('dialog', async(dialog)=>{
    await dialog.accept()
    console.log("Prompt alert:", dialog.message())
})
await singleFrame.locator('//button[@name="promptalertbox1234"]').click()
})
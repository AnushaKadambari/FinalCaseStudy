import { Page, Locator } from '@playwright/test'

export default class CartPage{
    readonly page: Page
    readonly items: Locator
    readonly plcordr: Locator
    

    constructor(page: Page){
        this.page = page
        this.items = this.page.locator('div.col-lg-8')
        this.plcordr = this.page.getByRole('button', {name: 'Place Order'})
        
    }

    async placeOrder(){
    await this.plcordr.click()
    }
    async getproductcount(){
        const items = this.page.locator('#tbodyid tr')
        const count = await items.count()
        console.log('Cart Item count:', count)
        return count
    }
    async deleteproduct(index:number){
        const deletebuttons = this.page.locator('text=Delete')
        await deletebuttons.nth(index).click()
         this.page.waitForTimeout(2000)
    }
    async delAllItems(){
        const deletebuttons = this.page.locator('text=Delete')
        while(await deletebuttons.count()>0){
            await deletebuttons.first().click()
            this.page.waitForTimeout(2000)
        }
    }
}

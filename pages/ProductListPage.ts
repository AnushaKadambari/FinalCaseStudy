import { Page, Locator } from "@playwright/test"

export default class ProductListPage{
    readonly page: Page
     readonly addToBtn: Locator
    // //readonly home: Locator
    readonly cartLink: Locator

constructor(page: Page) {
        this.page = page
        this.addToBtn = this.page.getByRole('button',{name: 'Add to cart'})
        this.cartLink = this.page.getByRole('link', { name: 'Cart', exact: true })
        
        }

        async addToCart(){
            //await this.page.click(`text=$name}`)
           await this.page.click('text=Add to cart')
             this.page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
        
        })
        //await this.page.click('text=Add to cart')
        await this.page.waitForTimeout(2000)
    }
    async viewCartPage(){
    await this.cartLink.click()
    }
}

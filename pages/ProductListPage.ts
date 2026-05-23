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

        
//         async viewCartPage(){
//     await this.cartLink.click()
//     }


//     import { Page, Locator } from "@playwright/test"

// export default class ProductListPage{
//     readonly page: Page
//     //item: Locator
//     // readonly item1: Locator
//     // readonly item2: Locator
//     readonly addToBtn: Locator
//     readonly backToProd: Locator
//     readonly removeItem1: Locator
//     readonly cartLink: Locator
//     readonly heading: Locator

//     constructor(page: Page) {
//         this.page = page
//         // this.item1 = this.page.getByAltText('Sauce Labs Backpack')
//         // this.item2 = this.page.getByAltText('Sauce Labs Bolt T-Shirt')
        
//         this.addToBtn = this.page.getByRole('button',{name: 'Add to cart'})
//         this.backToProd = this.page.getByRole('button', {name: 'Back to products'})
//         this.removeItem1 = this.page.locator('[data-test="remove"]')
//         this.cartLink = this.page.locator('[data-test="shopping-cart-link"]')
//         this.heading = this.page.getByText('Products')
//     }

//     //Add Items
//     // async addItemsToCart(){
//     // await this.item1.click()
//     // await this.addToBtn.click()
//     // await this.backToProd.click()
//     // //item2
//     //  await this.item2.click()
//     // await this.addToBtn.click()
//     // await this.backToProd.click()
    
//     // }
//     //read from json
//     async addItemToCart(itemName: string){
//         const item = this.page.getByAltText(`${itemName}`)
//         await item.click()
//         await this.addToBtn.click()
//         await this.backToProd.click()
//     }

//     async viewCartPage(){
//     await this.cartLink.click()
//     }

//     async isUserValid(): Promise<Locator>{
//         return this.heading
//     }
// }}
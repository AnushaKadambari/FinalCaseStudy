import { Page, Locator } from "@playwright/test"

export default class HomePage{
    readonly page: Page

constructor(page: Page) {
        this.page = page
}
async selectProduct(productName: string){
    // const product = this.page.getByAltText(`${productName}`)
    //     await product.click()
    await this.page.click(`text=${productName}`)
}
}

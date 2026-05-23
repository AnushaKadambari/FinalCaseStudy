import { Page, Locator } from "@playwright/test"

export default class CheckOutPage{
    readonly page: Page
    readonly nameInp: Locator
    readonly countryInp: Locator
    readonly cityInp: Locator
    readonly creditcardInp: Locator
    readonly monthInp: Locator
    readonly yearInp: Locator
    readonly closeBtn: Locator
    readonly purchaseBtn: Locator

    constructor(page: Page){
        this.page = page
        this.nameInp = page.getByRole('textbox', { name: 'Name:' })
        this.countryInp = page.getByRole('textbox', { name: 'Country:' })
        this.cityInp = page.getByRole('textbox', { name: 'City:' })
        this.creditcardInp = page.getByRole('textbox', { name: 'Credit card:' })
        this.monthInp = page.getByRole('textbox', { name: 'Month:' })
        this.yearInp = page.getByRole('textbox', { name: 'Year:' })
        this.purchaseBtn = page.getByRole('button', { name: 'Purchase' })
        this.closeBtn = page.getByRole('button', { name: 'Close'})
//       await expect(page.getByRole('heading', { name: 'Thank you for your purchase!'})).toBeVisible();

    }
    async placeOrder(strName: string, strCountry: string, strcity: string, strCreditcard: string, strMonth: string, strYear: string) {
        await this.nameInp.fill(strName)
        await this.countryInp.fill(strCountry)
        await this.cityInp.fill(strcity)
        await this.creditcardInp.fill(strCreditcard)
        await this.monthInp.fill(strMonth)
        await this.yearInp.fill(strYear)
        await this.purchaseBtn.click()
        
    }
}
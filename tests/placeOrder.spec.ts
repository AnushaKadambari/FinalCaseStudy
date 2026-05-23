import { test, expect } from '@playwright/test';
import  {products} from '../testData/products.json'
import ProductListPage from '../pages/ProductListPage';
import HomePage from '../pages/HomePage';
import CartPage from '../pages/CartPage'
import CheckOutPage from  '../pages/CheckOutPage'

test.describe('PlaceOrder Test....',() => {

    let listPage: ProductListPage
    let homePage: HomePage
    let cartPage: CartPage
    let checkOutPage: CheckOutPage
  
    test.beforeEach(async({ page }) => {
        listPage = new ProductListPage(page)
    homePage = new HomePage(page)
    cartPage = new CartPage(page)
    checkOutPage = new CheckOutPage(page)

    await page.goto('https://demoblaze.com/')
    
        })

    
        products.forEach((product, index) => {
            test(`Add  prodct ${product.name}`, async({ page}) => {
                await homePage.selectProduct(product.name)
                await listPage.addToCart()
                //await cartPage.getproductcount()
            })
            
        })
        test('View Cart', async({ page}) =>{
                await listPage.viewCartPage()
                await page.waitForTimeout(3000)
                
        })
         test('DeleteItem', async({ page }) => {
                 await listPage.viewCartPage()
                await page.waitForTimeout(3000)
                await cartPage.getproductcount()
                 await cartPage.deleteproduct(1)
                //await cartPage.delAllItems()
                 await page.waitForTimeout(3000)
                await cartPage.getproductcount()
         })
         test('CheckOutOrder', async({ page }) => {
            await listPage.viewCartPage()
            await page.waitForTimeout(3000)
            await cartPage.placeOrder()
            await page.waitForTimeout(3000)
            await checkOutPage.placeOrder('Anusha', 'Idia', 'Hyd', '123', 'May', '2026')
            await expect(page.getByRole('heading', { name: 'Thank you for your purchase!'})).toBeVisible();


         })
         
})


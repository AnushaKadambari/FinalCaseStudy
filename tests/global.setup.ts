import {test as setup, expect } from '@playwright/test'
import { STORAGE_STATE } from '../playwright.config';

setup('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('AnushaK');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('Catsndogs@12345');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Welcome AnushaK' }).click();

   await page.context().storageState({path: STORAGE_STATE})
});
import { test, expect } from '@playwright/test';
import { Pages } from '../pages/pages';


test('Logintest', async ({ page }) => {
  // const loginPage = new Loginpage(page);
  // const contextmenu = new ContextMenu(page);
  const pages = new Pages(page);

  //await page.goto('/web/index.php/auth/login');
  //await page.waitForTimeout(2000);
  //await loginpage.goto();
  //await loginpage.Login('Admin', 'admin123');
  //await waitAndClick(loginPage.DropdownMenu);
  //await loginPage.Dropdownmenu();
  /*await expect(loginPage.LogOutButton).toBeVisible();
  await loginPage.LogoutButton();*/

  //await contextmenu.clickAdmin();

  await pages.loginPage.goto();
  await pages.loginPage.Login('Admin', 'admin123');


});

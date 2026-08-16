import { test, expect } from '@playwright/test';
import { Pages } from '../pages/Pages';

test.beforeEach(async ({ page }) => {
  const pages = new Pages(page);
  await pages.loginPage.goto();
  await pages.loginPage.Login("Admin", "admin123"); // lowercase method name
});

test("Dashboard test", async ({ page }) => {
  const pages = new Pages(page);
  await pages.contextMenu.clickAdmin();
  //await expect(page.locator('text=Admin Dashboard')).toBeVisible();
});

test("Another test", async ({ page }) => {
  const pages = new Pages(page);
  await pages.contextMenu.clickPIM();
  //await expect(page.locator('text=Employee Information')).toBeVisible();
});


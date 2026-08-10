import { Locator } from '@playwright/test';

export async function waitAndClick(locator: Locator) {
  await locator.waitFor({ state: 'visible' });
  await locator.click();
}
const { test, expect } = require('@playwright/test');
test('homepage has title', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=All Matters Visa')).toBeVisible();
});

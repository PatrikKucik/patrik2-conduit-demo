import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Test Login Page' }).click();
  await page.getByText('Username: practice', { exact: true }).click();
  await page.locator('b').filter({ hasText: 'practice' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('practice');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  //await page.locator('iframe[name="aswift_4"]').contentFrame().locator('iframe[name="ad_iframe"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
  //await page.locator('.grippy-host').click();
  await page.getByRole('link', { name: 'Dynamic Table' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.close();
});

test("Conditional theme click", async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com/pages/iot-dashboard");

  // 1️⃣ Open the dropdown (the theme button always shows current theme)
  await page.getByRole("button", { name: /(Light|Dark|Cosmic|Corporate)/ }).click();

  // 2️⃣ Now options are visible — conditional click works
  const themes = ["Light", "Dark", "Cosmic", "Corporate"];

  for (const theme of themes) {
    const el = page.getByText(theme, { exact: true });

    if (await el.isVisible().catch(() => false)) {
      console.log(`clicked => ${theme}`);
      await el.click();
      break;
    }
  }
  await page.close();
});
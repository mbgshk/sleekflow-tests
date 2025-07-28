import { test, expect } from '@playwright/test';

test('User can sign up successfully', async ({ page }) => {
  const timestamp = Date.now();
  const email = `testuser+${timestamp}@example.com`;

  await page.goto('https://sleekflow.io/signup');

  await page.getByRole('textbox', { name: /name/i }).fill('Bagus QA');
  await page.getByRole('textbox', { name: /email/i }).fill(email);
  await page.getByRole('textbox', { name: /password/i }).fill('Test@1234');

  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: /sign up/i }).click();

  await expect(page).toHaveURL(/dashboard/); // atau sesuaikan dengan URL setelah berhasil signup
});

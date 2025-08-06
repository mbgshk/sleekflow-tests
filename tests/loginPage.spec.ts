import { test, expect } from '@playwright/test';

test('should open login page in new tab from dashboard', async ({ page, context }) => {
  await page.goto('/');

  const [loginTab] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Log In' }).click(),
  ]);

  await loginTab.waitForLoadState();

  await expect(loginTab).toHaveURL(/login/);
  await expect(loginTab.getByLabel('Email')).toBeVisible();
  await expect(loginTab.getByText('Welcome Back')).toBeVisible();
});
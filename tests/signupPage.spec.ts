import { test, expect } from '@playwright/test';

test('should open sign up page in new tab from dashboard', async ({ page, context }) => {
  await page.goto('/');

  const [loginTab] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Log In' }).click(),
  ]);

  await loginTab.waitForLoadState('domcontentloaded');
  await loginTab.getByRole('link', { name: 'Sign up' }).click();
  await loginTab.waitForLoadState('networkidle');

  await expect(loginTab).toHaveURL(/signup/i);
  await expect(loginTab.getByText(/create your account/i)).toBeVisible();
});

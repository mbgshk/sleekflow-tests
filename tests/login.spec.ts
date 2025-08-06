import { test, expect } from '@playwright/test';
import { openLoginPageInNewTab, loginInNewTab } from '../utils/authHelpers';

test('open login on new tab', async ({ page, context }) => {
  await page.goto('/');

  const loginTab = await openLoginPageInNewTab(page, context);

  await expect(loginTab).toHaveURL(/login/);
  await expect(loginTab.getByLabel('Email')).toBeVisible();
  await expect(loginTab.getByText('Welcome Back')).toBeVisible();
});

test('hit button continue without filled username/email', async ({ page, context }) => {
  await page.goto('/');

  const loginTab = await openLoginPageInNewTab(page, context);

  await loginInNewTab(loginTab, '');

  const isValid = await loginTab.evaluate(() => {
    const input = document.querySelector('input[name="username"]') as HTMLInputElement;
    return input.checkValidity();
  });

  expect(isValid).toBe(false);

});

test('success go to password page', async ({ page, context }) => {
  await page.goto('/');

  const loginTab = await openLoginPageInNewTab(page, context);

  await loginInNewTab(loginTab, 'mbgshk@gmail.com');

  await loginTab.waitForLoadState('networkidle');

  await expect(loginTab).toHaveURL(/password/i);
  await expect(loginTab.getByText(/sign in to continue/i)).toBeVisible();
});

test('edit username/email', async ({ page, context }) => {
  await page.goto('/');

  const loginTab = await openLoginPageInNewTab(page, context);

  await loginInNewTab(loginTab, 'mbgshk@gmail.com');
  await loginTab.waitForLoadState('networkidle');
  await loginTab.getByRole('link', { name: 'Edit' }).click();
  await loginInNewTab(loginTab, 'new.email@gmail.com');

  await expect(loginTab).toHaveURL(/password/i);
  await expect(loginTab.getByText(/new.email/i)).toBeVisible();

});

test('login failed', async ({ page, context }) => {
  await page.goto('/');

  const loginTab = await openLoginPageInNewTab(page, context);

  await loginInNewTab(loginTab, 'mbgshk@gmail.com');
  await loginTab.waitForLoadState('networkidle');
  await loginTab.getByRole('textbox', { name: /password/i }).fill('wrongpassword');
  await loginTab.getByRole('button', { name: 'Sign in' }).click();

  await expect(loginTab.getByText(/wrong username or password/i)).toBeVisible();
});

import { Page, BrowserContext } from '@playwright/test';

export async function openLoginPageInNewTab(page: Page, context: BrowserContext) {
  const [loginTab] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Log In' }).click(),
  ]);

  await loginTab.waitForLoadState();
  return loginTab;
}

export async function loginInNewTab(loginTab: Page, email: string) {
  await loginTab.getByRole('textbox', { name: /email/i }).fill(email);
  await loginTab.locator('button._button-login-id').click();
}

export async function openSignUp(page: Page, context: BrowserContext) {
  const [loginTab] = await Promise.all([
    context.waitForEvent('page'),
    page.getByRole('link', { name: 'Log In' }).click(),
  ]);

  await loginTab.waitForLoadState('domcontentloaded');

  await loginTab.getByRole('link', { name: 'Sign up' }).click();
  await loginTab.waitForLoadState('networkidle');
  return loginTab;
}

export async function signUp(signupTab: Page, email: string) {
  await signupTab.getByRole('textbox', { name: /email/i }).fill(email);
  await signupTab.locator('button._button-signup-id').click();
}
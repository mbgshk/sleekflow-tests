import { test, expect } from '@playwright/test';
import { openSignUp, signUp } from '../utils/authHelpers';

// test('open sign up successfully', async ({ page, context }) => {
//   await page.goto('/');

//   const signupTab = await openSignUp(page, context);

//   await expect(signupTab).toHaveURL(/signup/i);
//   await expect(signupTab.getByText(/create your account/i)).toBeVisible();
// });

// test('hit button sign up without filled username/email', async ({ page, context }) => {
//   await page.goto('/');

//   const signupTab = await openSignUp(page, context);

//    await signUp(signupTab, '');

//   const isValid = await signupTab.evaluate(() => {
//     const input = document.querySelector('input[name="email"]') as HTMLInputElement;
//     return input.checkValidity();
//   });

//   expect(isValid).toBe(false);

// });

// test('success go to password page', async ({ page, context }) => {
//   await page.goto('/');

//   const signupTab = await openSignUp(page, context);

//   await signUp(signupTab, 'mbgshk@gmail.com');

//   await signupTab.waitForLoadState('networkidle');

//   await expect(signupTab).toHaveURL(/password/i);
//   await expect(signupTab.locator('input[name="username"]')).toBeVisible();
//   await expect(signupTab.locator('input[name="password"]')).toBeVisible();
//   await expect(signupTab.locator('input[name="password"]')).toHaveAttribute('type', 'password');
// });

// test('edit email a.k.a go back to previous page', async ({ page, context }) => {
//   await page.goto('/');

//   const signupTab = await openSignUp(page, context);

//   await signUp(signupTab, 'mbgshk@gmail.com');
//   await signupTab.waitForLoadState('networkidle');
//   await signupTab.getByRole('link', { name: 'Edit' }).click();
//   await signUp(signupTab, 'new.email@gmail.com');

//   await expect(signupTab).toHaveURL(/password/i);
//   await expect(signupTab.getByText(/new.email/i)).toBeVisible();

// });

// test('sign up failed username countain special char', async ({ page, context }) => {
//   await page.goto('/');

//   const signupTab = await openSignUp(page, context);

//   await signUp(signupTab, 'mbgshk@gmail.com');
//   await signupTab.waitForLoadState('networkidle');
//   await signupTab.getByRole('textbox', { name: /username/i }).fill('uname123!!@#$%^&*()');
//   await signupTab.getByRole('textbox', { name: /password/i }).fill('Wr0ngpassword_');
//   await signupTab.getByRole('button', { name: 'Sign up' }).click();

//   await expect(signupTab.getByText(/your username must only contain alphanumeric values/i)).toBeVisible();
// });

test('user can signup successfully', async ({ page, context }) => {
  await page.goto('/');

  const signupTab = await openSignUp(page, context);
  const timestamp = Date.now();
  const email = `mbgshk+${timestamp}@gmail.com`;
  const uname = `mbgshk${timestamp}`;

  await signupTab.getByRole('textbox', { name: /email/i }).fill(email);
  await signupTab.locator('button._button-signup-id').click();

  await signupTab.getByRole('textbox', { name: /username/i }).fill(uname);
  await signupTab.getByRole('textbox', { name: /password/i }).fill('Test@1234');
  await signupTab.getByRole('button', { name: /sign up/i }).click();

  await expect(signupTab).toHaveURL(/setup-company/);
});

import { test, expect } from '@playwright/test';
import { login } from '../utils/authHelpers';

test('User can log in with valid credentials', async ({ page }) => {
  await login(page, 'testuser@example.com', 'Test@1234');

  // Check if redirected to dashboard or homepage
  await expect(page).toHaveURL(/dashboard|home|workspace/);
});

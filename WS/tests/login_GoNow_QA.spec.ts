import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://app.x-test2.5-now.com/login');
  await page.getByRole('textbox', { name: 'メールアドレス' }).click();
  await page.getByRole('textbox', { name: 'メールアドレス' }).click();
  await page.getByRole('textbox', { name: 'メールアドレス' }).fill('itomariko88@gmail.com');
  await page.getByRole('textbox', { name: 'パスワード' }).click();
  await page.getByRole('textbox', { name: 'パスワード' }).fill('Password012345@');
  await page.getByRole('button', { name: 'ログイン' }).click();

});
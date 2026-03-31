import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.x-test2.5-now.com/login');
  await page.getByRole('textbox', { name: 'メールアドレス' }).click();
  await page.getByRole('textbox', { name: 'メールアドレス' }).fill('itomariko88@gmail.com'); 
  await page.getByRole('textbox', { name: 'パスワード' }).fill('Password012345@');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByRole('button', { name: 'kanban グループ/エリア 登録' }).click();
  await page.getByRole('radio', { name: 'エリア' }).check();
  await page.getByRole('textbox', { name: '名称' }).click();
  await page.getByRole('textbox', { name: '名称' }).fill('エリアB-1');
  await page.getByRole('textbox', { name: '所属' }).click();
  await page.getByRole('option', { name: 'グループmito_B' }).click();
  await page.getByRole('button', { name: '登録', exact: true }).click()});
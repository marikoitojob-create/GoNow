import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.x-dev2.5-now.com/login');
await page.getByRole('textbox', { name: 'メールアドレス' }).fill('itomariko88@gmail.com');
await page.getByRole('textbox', { name: 'パスワード' }).fill('Password012345@');
await page.getByRole('button', { name: 'ログイン' }).click();
await page.getByRole('link', { name: 'グループ グループ' }).click();
await page.goto('https://app.x-dev2.5-now.com/groups/78bb43a7-aeb5-4fe6-99bf-f1bd9a616b6a');
if(!page.getByRole('button', { name: 'グループm2' }).isVisible()){
  console.log("要素が見つかりません");
}else{
  await page.getByRole('button', { name: 'グループm2-1' }).first().click();
  await page.waitForLoadState('domcontentloaded');
}
if(!await page.getByRole('button', { name: 'icon エリアm2-1-1' }).isVisible()){
  console.log("要素が見つかりません");
}else if(await page.getByRole('button', { name: 'icon エリアm2-1-1(改)' }).isVisible()){
  const element = page.getByRole('button', { name: 'icon エリアm2-1-1(改)' });
  await element.waitFor({state: 'visible', timeout: 5000});
  await element.click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('button', { name: '登録内容変更' }).click();
await page.getByRole('textbox', { name: '名称' }).fill('エリアm2-1-1(変)');
}else{
  await page.getByRole('button', { name: 'エリアm2-1-1' }).click();
   await page.waitForLoadState('domcontentloaded');
  await page.getByRole('button', { name: '登録内容変更' }).click();
await page.getByRole('textbox', { name: '名称' }).fill('エリアm2-1-1(改)');
}
await page.getByRole('button', { name: '更新' }).click();
});
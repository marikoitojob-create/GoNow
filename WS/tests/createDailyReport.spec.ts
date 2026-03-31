import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://app.x-test2.5-now.com/login');
  await page.getByRole('textbox', { name: 'メールアドレス' }).click();
  await page.getByRole('textbox', { name: 'メールアドレス' }).fill('itomariko88@gmail.com');
  await page.getByRole('textbox', { name: 'パスワード' }).click();
  await page.getByRole('textbox', { name: 'パスワード' }).fill('Password012345@');
  await page.getByRole('button', { name: 'ログイン' }).click();

     const unregisteredLocator = page.getByText('未登録').first();
  while (!(await unregisteredLocator.isVisible())) {
    await page.getByRole('button', { name: 'previous week' }).click();
    await page.waitForLoadState('domcontentloaded');
  }

  // 「未登録」の日報がなくなるまで繰り返すメインループ
  // これは、未登録の日報がある限り、次へ進んで日報を作成する一連の処理を繰り返します。
  const allUnregisteredLocators = page.getByText('未登録');

  while ((await allUnregisteredLocators.count()) > 0) {
    // 4. 「未登録」の日報をクリック
    // `first()`を使用して、見つかった最初の「未登録」をクリックします。
    await allUnregisteredLocators.first().click();
    await page.waitForLoadState('domcontentloaded');

    // 5. 「日報作成」ボタンをクリックして、日報を作成する
    await page.getByRole('button', { name: '日報作成' }).click();
    await page.getByText('満タン').click();
    await page.getByText('次へ').click();
    await page.getByRole('button', { name: '登録', exact: true }).click();
    await page.waitForLoadState('domcontentloaded');

    // 日報作成後、次の日に移動する
    // 「next day」ボタンが表示されていることを確認してクリック
    const nextDayButton = page.getByRole('button', { name: 'next day' });
    if (await nextDayButton.isVisible()) {
      await nextDayButton.click();
      await page.waitForLoadState('domcontentloaded');
    }
  }

  // すべての「未登録」日報が処理されたことを確認
  await expect(page.getByText('未登録')).not.toBeVisible();
});
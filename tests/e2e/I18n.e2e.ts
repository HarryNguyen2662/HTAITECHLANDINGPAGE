import { expect, test } from '@playwright/test';

test.describe('I18n', () => {
  test.describe('Language Switching', () => {
    test('should show Vietnamese by default on the homepage', async ({ page }) => {
      await page.goto('/');

      await expect(page.getByText('Xây AI vận hành được trong thực tế')).toBeVisible();
    });

    test('should switch language from Vietnamese to English using dropdown', async ({ page }) => {
      await page.goto('/');

      await expect(page.getByText('Xây AI vận hành được trong thực tế')).toBeVisible();

      await page.getByLabel('Language switcher').selectOption('en');

      await expect(page.getByText('Build AI that holds up in real operations')).toBeVisible();
    });

    test('should show English when visiting /en', async ({ page }) => {
      await page.goto('/en');

      await expect(page.getByText('Build AI that holds up in real operations')).toBeVisible();
    });
  });
});

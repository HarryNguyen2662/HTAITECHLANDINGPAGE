import percySnapshot from '@percy/playwright';
import { expect, test } from '@playwright/test';

test.describe('Visual testing', () => {
  test.describe('Static pages', () => {
    test('should take screenshot of the homepage', async ({ page }) => {
      await page.goto('/');

      await expect(page.getByText('Xây AI vận hành được trong thực tế')).toBeVisible();

      await percySnapshot(page, 'Homepage');
    });

    test('should take screenshot of the English homepage', async ({ page }) => {
      await page.goto('/en');

      await expect(page.getByText('Build AI that holds up in real operations')).toBeVisible();

      await percySnapshot(page, 'Homepage - English');
    });
  });
});

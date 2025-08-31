import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

test.beforeEach(async ({ page }) => {
    await page.goto('');
});

test('Verify page title', async ({ page }) => {
    await expect(page).toHaveTitle('Netflix');
});

test('Verify sign now now', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Sign up now.' })).toBeVisible();
});

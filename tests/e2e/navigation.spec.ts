// tests/e2e/navigation.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Rafael Bercam/)
  })

  test('should navigate between sections', async ({ page }) => {
    await page.goto('/')

    // Check if navigation links exist
    await expect(page.locator('nav a[href="#about"]')).toBeVisible()
    await expect(page.locator('nav a[href="#projects"]')).toBeVisible()
    await expect(page.locator('nav a[href="#tech-stack"]')).toBeVisible()
    await expect(page.locator('nav a[href="#contact"]')).toBeVisible()
  })

  test('should scroll to sections on navigation click', async ({ page }) => {
    await page.goto('/')

    // Click on About link
    await page.locator('nav a[href="#about"]').click()

    // Check if About section is visible
    await expect(page.locator('#about')).toBeInViewport()
  })
})
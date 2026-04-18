// tests/e2e/projects.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Projects Section', () => {
  test('should display projects', async ({ page }) => {
    await page.goto('/')

    // Scroll to projects section
    await page.locator('#projects').scrollIntoViewIfNeeded()

    // Check if projects are visible
    await expect(page.locator('#projects')).toBeVisible()
    await expect(page.locator('.project-card')).toHaveCount(4)
  })

  test('should have working GitHub links', async ({ page }) => {
    await page.goto('/')

    // Scroll to projects section
    await page.locator('#projects').scrollIntoViewIfNeeded()

    // Check if GitHub links are present and valid
    const githubLinks = page.locator('.project-card a[href*="github.com"]')
    await expect(githubLinks).toHaveCount(4)

    // Check if links contain the correct GitHub username
    for (const link of await githubLinks.all()) {
      const href = await link.getAttribute('href')
      expect(href).toContain('github.com/rafaelbercam')
    }
  })

  test('should open GitHub links in new tab', async ({ page, context }) => {
    await page.goto('/')

    // Scroll to projects section
    await page.locator('#projects').scrollIntoViewIfNeeded()

    // Click on first project GitHub link
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.locator('.project-card').first().locator('a[href*="github.com"]').click()
    ])

    // Check if new tab opened with GitHub URL
    expect(newPage.url()).toContain('github.com/rafaelbercam')
  })
})
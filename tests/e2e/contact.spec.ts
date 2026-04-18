// tests/e2e/contact.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Contact Form', () => {
  test('should display contact information', async ({ page }) => {
    await page.goto('/')

    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded()

    // Check contact info cards
    await expect(page.locator('.info-card')).toHaveCount(3)
    await expect(page.locator('.info-card').filter({ hasText: 'Email' })).toBeVisible()
    await expect(page.locator('.info-card').filter({ hasText: 'LinkedIn' })).toBeVisible()
    await expect(page.locator('.info-card').filter({ hasText: 'GitHub' })).toBeVisible()
  })

  test('should validate contact form', async ({ page }) => {
    await page.goto('/')

    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded()

    // Try to submit empty form
    await page.locator('button[type="submit"]').click()

    // Check for validation messages
    await expect(page.locator('.error-message')).toBeVisible()
  })

  test('should accept valid form data', async ({ page }) => {
    await page.goto('/')

    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded()

    // Fill form with valid data
    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('input[name="subject"]', 'Test Subject')
    await page.fill('textarea[name="message"]', 'This is a test message')

    // Check if form can be submitted (button should be enabled)
    const submitButton = page.locator('button[type="submit"]')
    await expect(submitButton).not.toBeDisabled()
  })

  test('should have working contact links', async ({ page }) => {
    await page.goto('/')

    // Scroll to contact section
    await page.locator('#contact').scrollIntoViewIfNeeded()

    // Check email link
    const emailLink = page.locator('.contact-link').filter({ hasText: 'Enviar Email' })
    await expect(emailLink).toHaveAttribute('href', /^mailto:/)

    // Check LinkedIn link
    const linkedinLink = page.locator('.contact-link').filter({ hasText: 'Visitar Perfil' })
    await expect(linkedinLink).toHaveAttribute('href', /linkedin\.com/)

    // Check GitHub link
    const githubLink = page.locator('.contact-link').filter({ hasText: 'Ver Projetos' })
    await expect(githubLink).toHaveAttribute('href', /github\.com/)
  })
})
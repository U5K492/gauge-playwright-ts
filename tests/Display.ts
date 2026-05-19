import { Step } from 'gauge-ts';
import { expect } from '@playwright/test';
import { PlaywrightManager } from './PlaywrightManager';

export default class Display {

  @Step('GET STARTEDをクリックする')
  public async clickGetStarted() {
    const page = await PlaywrightManager.page();
    await page.getByRole('link', { name: 'Get started' }).first().click();
  }

  @Step('Installationページに遷移する')
  public async assertInstallationPage() {
    const page = await PlaywrightManager.page();
    await expect(page).toHaveTitle('Installation | Playwright');
  }
}

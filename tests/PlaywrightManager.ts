import { chromium, Browser, BrowserContext, Page } from 'playwright';

export class PlaywrightManager {
  private static browser: Browser;
  private static context: BrowserContext;
  private static _page: Page;

  static async setup(): Promise<void> {
    PlaywrightManager.browser = await chromium.launch({ headless: false });
    PlaywrightManager.context = await PlaywrightManager.browser.newContext();
    PlaywrightManager._page = await PlaywrightManager.context.newPage();
  }

  static async page(): Promise<Page> {
    if (PlaywrightManager._page.isClosed()) {
      PlaywrightManager._page = await PlaywrightManager.context.newPage();
    }
    return PlaywrightManager._page;
  }

  static async refreshBrowserContext(): Promise<void> {
    await PlaywrightManager._page.close();
    await PlaywrightManager.context.close();
    PlaywrightManager.context = await PlaywrightManager.browser.newContext();
    PlaywrightManager._page = await PlaywrightManager.context.newPage();
  }

  static async teardown(): Promise<void> {
    await PlaywrightManager.browser.close();
  }
}

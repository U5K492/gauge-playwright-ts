import { AfterScenario, AfterSuite, BeforeSuite, Step } from 'gauge-ts';
import { PlaywrightManager } from './PlaywrightManager';

export default class Example {

  @BeforeSuite()
  public async setup() {
    await PlaywrightManager.setup();
  }

  @AfterSuite()
  public async teardown() {
    await PlaywrightManager.teardown();
  }

  @AfterScenario()
  public async refreshBrowser() {
    await PlaywrightManager.refreshBrowserContext();
  }

  @Step('<path>を開く')
  public async open(path: string) {
    const page = await PlaywrightManager.page();
    await page.goto(path);
  }
}

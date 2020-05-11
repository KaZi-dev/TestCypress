import { AppPage } from './app.po';
import { browser, by, element, protractor, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  const name = 'Test ';
  const address = 'Wunderland 3';

  // tslint:disable-next-line:no-shadowed-variable
  function enterData(name, address) {
    element(by.name('nameT')).sendKeys(name);
    element(by.name('addressT')).sendKeys(address);
    return name + address;
  }
  beforeEach(() => {
    page = new AppPage();
  });
  it('should have a title', () => {
    page.navigateTo();
    browser.driver.getTitle().then((pageTitle) => {
      expect(pageTitle).toContain('TestCypress');
    });
  });
  it('should hide the data before the click', () => {
    const foo = element(by.id('hidData'));
    expect(foo.isDisplayed()).toBe(false);
  });
  it('should click the first button to begin', () => {
    element(by.name('btnFirst')).click();
    expect(element(by.id('hidData')).isDisplayed).not.toBe(false);
  });
  it('should show the entered Data', () => {
    enterData(name, address);
    const data = element(by.id('showData'));
    browser.wait(data.isEnabled());
    expect(data.getText()).toContain(name, address);
  });
  it('should click the first button to begin', () => {
    element(by.name('btnTransmit')).click();
  });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

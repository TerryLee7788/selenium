const {
  Builder,
  By,
  Key,
  until
} = require('selenium-webdriver');
const assert = require('assert');

describe('Google Search', () => {
  it('open google web', function (done) {
    this.timeout(10000);

    (async () => {
      let driver = await new Builder().forBrowser('chrome').build();
      await driver.manage().window().maximize()
      await driver.get('http://www.google.com');
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      const title = await driver.getTitle()
      await assert.equal(title, 'webdriver - Google 搜尋')
      await driver.quit();
      await done()
    })()

  })
})

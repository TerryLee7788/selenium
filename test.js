/*
 * Reference doc
 * https://code.google.com/p/selenium/wiki/WebDriverJs#Getting_Started
 * https://selenium.googlecode.com/git/docs/api/java/org/openqa/selenium/WebDriver.html
 * http://code.tutsplus.com/tutorials/an-introduction-to-webdriver-using-the-javascript-bindings--cms-21855
 * http://stackoverflow.com/questions/19914915/how-to-make-protractor-press-the-enter-key
 * 
 * http://pcsupport.about.com/od/commandlinereference/a/redirect-command-output-to-file.htm
 * "mocha test.js > log.txt"
 * > Can create the file I specify is created if it doesn't already exist and is overwritten if it does exist.
 * "mocha test.js >> log.txt
 * > Two ">>" will appends the command output to the end of the file.
 */

/*
 * use node test.js
 */

/*
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    assert = require('assert'),
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    //.forBrowser('firefox')
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(check_title, 1000);
driver.quit();

function check_title () {
  var promise = driver.getTitle().then( function (title) {
    if (title === 'webdriver - Google Search') {
      console.log('success');
      return true;
    } else {
      console.log('fail -- ' + title);
    }
  });
  return promise;
}
*/

/*
 * use mocha test.js
 */

var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    // chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    Key = webdriver.Key,
    until = webdriver.until;

test.describe('Google Search', function() {
  var url = 'http://www.google.com/',
      driver, action;
  
  /* 
   * specify the timeout on the test
   * or you can just "mocha test.js --timeout 15000"
   */
  this.timeout(15000);

  // In the test scope functions
  function checkTitle() {
    return until.titleContains('webdriver - Google');
  }
  
  //before(function () {
  test.beforeEach(function () {
    console.log('"Google Search" before\n');
    driver = new webdriver.Builder().
              withCapabilities(webdriver.Capabilities.chrome()).
              build();
    action = new webdriver.ActionSequence(driver);
  });

  //after(function () {
  test.afterEach(function () {
    console.log('"Google Search" after\n');
    driver.quit();
  });

  test.it('first test, try to open google web', function() {
  //it('Google Search => should work', function(done) {
    console.log('hi, first');

    /* move to before / beforeEach fn
    var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
    */

    driver.get(url);
    
    // try to checking things
    driver.findElement(By.name('q')).then(function (q) {
      q.sendKeys('webdriver');
    });

    // send "esc" key
    action.sendKeys(Key.ESCAPE).perform();

    // The "click" means "mouse click"
    driver.findElement(By.name('btnK')).click();
    driver.wait(checkTitle, 5000);
    
    /* try to checking things
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('simple programmer');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'simple programmer');
    });
    driver.wait(until.titleContains('simple programmer'));
    */

    // asynchronous function
    // done();
  });

  //test.it('second test', function () {
  it('second test', function () {
    var name = 'Terry';

    // use assert
    assert.equal(name, 'Terry');

    /*
    driver.get(url);
    this.timeout(15000);
    driver.quit();
    */
  });
  
});
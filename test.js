/*
 * Reference doc
 * https://code.google.com/p/selenium/wiki/WebDriverJs#Getting_Started
 * https://selenium.googlecode.com/git/docs/api/java/org/openqa/selenium/WebDriver.html
 * http://code.tutsplus.com/tutorials/an-introduction-to-webdriver-using-the-javascript-bindings--cms-21855
 * http://stackoverflow.com/questions/19914915/how-to-make-protractor-press-the-enter-key
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
 * 
 * "mocha test.js > log.txt" 可以create 一個 "log.txt" 檔案紀錄, 重跑一次會overwrite "log.txt" 檔案
 * "mocha test.js >> log.txt" 兩個 ">>" 則是可以一直把記錄檔寫入進去 "log.txt" 檔案
 * 
 * 以後每個 test tasks 就是一個 test.describe('xxx', function () { ... }) 這樣
 * 假設有100 個tasks 就是 100個 describe... ?
 * 
 */

var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    // chrome = require('selenium-webdriver/chrome'),
    By = webdriver.By,
    Key = webdriver.Key,
    until = webdriver.until;

//test.describe('Google Search', function() {
describe('Google Search', function() {
  var url = 'http://www.google.com/',
      driver, action;
  
  function checkTitle() {
    return until.titleContains('webdriver - Google');
  }
  
  //before(function () {
  beforeEach(function () {
    console.log('"Google Search" before\n');
    driver = new webdriver.Builder().
              withCapabilities(webdriver.Capabilities.chrome()).
              build();
    action = new webdriver.ActionSequence(driver);
  });

  //after(function () {
  afterEach(function () {
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
    
    // specify the timeout on the test
    // or you can just "mocha test.js --timeout 15000"
    this.timeout(15000);

    /* try to checking things */
    //driver.findElement(By.name('q')).sendKeys('webdriver');
    driver.findElement(By.name('q')).then(function (q) {
      q.sendKeys('webdriver');
    });
    action.sendKeys(Key.ESCAPE).perform(); // error: not a modifier key
    driver.findElement(By.name('btnK')).click();
    //driver.findElement(By.className('sbqs_c')).click();
    //driver.findElement(By.css('input[class="lsb"]')).click();
    //driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    driver.wait(checkTitle, 5000);
    
    /* try to checking things
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('simple programmer');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'simple programmer');
    });
    driver.wait(until.titleContains('simple programmer'));
    */
    // driver.quit();

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

/*
test.describe('Yahoo', function() {
  test.it('should work', function() {
  //it('should work', function() {
    
    var driver = new webdriver.Builder().
      withCapabilities(webdriver.Capabilities.chrome()).
      build();
    
    driver.get('http://Yahoo.com');
    this.timeout(15000);
    driver.quit();
    
  });
});
*/
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
 * "mocha test.js > log.txt" �i�Hcreate �@�� "log.txt" �ɮ׬���, ���]�@���|overwrite "log.txt" �ɮ�
 * "mocha test.js >> log.txt" ��� ">>" �h�O�i�H�@����O���ɼg�J�i�h "log.txt" �ɮ�
 * 
 * �H��C�� test tasks �N�O�@�� test.describe('xxx', function () { ... }) �o��
 * ���]��100 ��tasks �N�O 100�� describe... ?
 * 
 */

var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
 
test.describe('Google Search', function() {
  test.it('should work', function() {
    var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
    
    driver.get('http://www.google.com/ncr');
    this.timeout(15000);
    
    /*
    driver.findElement(By.name('q')).sendKeys('webdriver');
    driver.findElement(By.name('btnK')).click();
    driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    driver.wait(until.titleContains('webdriver - Google'), 5000);
    */
    /*
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('simple programmer');
    searchBox.getAttribute('value').then(function(value) {
      assert.equal(value, 'simple programmer');
    });
    driver.wait(until.titleContains('simple programmer'));
    */
    driver.quit();
    
  });
});

test.describe('Yahoo', function() {
  test.it('should work', function() {
    var driver = new webdriver.Builder().
      withCapabilities(webdriver.Capabilities.chrome()).
      build();
    
    driver.get('http://Yahoo.com');
    this.timeout(15000);
    driver.quit();
    
  });
});
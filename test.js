/*
 * Reference doc
 * 
 * https://code.google.com/p/selenium/wiki/WebDriverJs#Getting_Started
 * https://selenium.googlecode.com/git/docs/api/javascript/module_selenium-webdriver.html
 * http://code.tutsplus.com/tutorials/an-introduction-to-webdriver-using-the-javascript-bindings--cms-21855
 * http://stackoverflow.com/questions/19914915/how-to-make-protractor-press-the-enter-key
 *
 * Set browser window size
 * http://stackoverflow.com/questions/20023567/how-to-set-default-browser-window-size-in-protractor-webdriverjs
 * 
 * Log command output
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

var lib_list = require('./lib/basic_require').lib(global);

// fs => based on node js "File System" module
fs.readFile(__dirname + '/package.json', 'utf8', function (err, file) {
  if(!err) {
    console.log(JSON.parse(file).name);
  }
});

test.describe('Google Search', function() {
  var url = 'http://www.google.com/',
      driver, action,
  
  tryAsyn = function (done) {
    var timer = 10000,
        second = (timer / 1000);
    console.log('"Google Search" test will start after ' + second + ((second >= 10) ? (' seconds') : (' second')) );
    /****
     * 
     * To make a test asynchronous,
     * the test function should accept a callback function.
     * Also, The "done" callback function also accepts an error as the first argument,
     * which means that instead of throwing an error.
     * 
     * Example: 
     *
     *   it('Test something', function (done) {
     *     doSomethingAsyn(function (err) {
     *       done(err);
     *     });
     *   });
     * 
     ****/
    
    // if a function is asyn, simply accept a callback argument
    setTimeout(done, timer);
    // Test will started after 10s
  },
  checkTitle = function (title) {
    return until.titleContains(title);
  };

  /* 
   * specify the timeout on the test
   * or you can just ("mocha test.js --timeout 15000" / "mocha test.js -t 15000")
   */
  this.timeout(15000);
  
  test.before(function () {
    driver = new webdriver.Builder().
              // withCapabilities(webdriver.Capabilities.chrome()).
              forBrowser('chrome').
              build();
    // action = new webdriver.ActionSequence(driver);
  });

  test.after(function () {
    driver.quit();    
  });

  test.beforeEach(tryAsyn);

  test.afterEach(function () {
    console.log('"Google Search" test end');
  });

  test.it('Try to open google web', function() {
    var js;

    // based on node js "EventEmitter"
    EventEmitter.on('load', function () {
      console.log('loaded');
    });

    // trigger the load event
    EventEmitter.emit('load');

    // set full screen
    driver.manage().window().maximize();
    
    // Go the "url" page
    driver.get(url);
    
    // Run my js code
    js = 'return document.documentElement.clientWidth';
    driver.executeScript(js).then(function (val) {
      console.log('Current window width: ' + val + 'px');
    });
    // send "esc" key
    // action.sendKeys(Key.ESCAPE).perform();

    // try to checking things
    driver.findElement(By.name('q')).sendKeys(['webdriver' + Key.ESCAPE]);
    var name = 'Terry';

    // use assert, change the assert message
    assert.equal(name, 'Terry', 'this name is not equal to "Terry"');
    
    // The "click" means "mouse click"
    driver.findElement(By.name('btnK')).click();
    driver.wait(checkTitle('webdriver'), 5000, 'checking title end.');
    driver.getTitle().then(function (title) {
      console.log('Current page title: ' + title);
    });

  });  
});
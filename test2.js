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
 * use mocha test.js
 */

/*******
 * setting modules from "basic_require" module for this case
 * "global" object is node.js global environment, (just like "window" object in the browser)
 *
 *******/

var lib_list = require('./lib/basic_require').lib(global);

// fs => based on node js "File System" module
fs.readFile(__dirname + '/package.json', 'utf8', function (err, file) {
  if(!err) {
    console.log(JSON.parse(file).name);
  }
});

test.describe('Google Search - Test Tasks', function() {
  var url = 'http://www.google.com/',
      driver, action,
  openBrowser = function () {
    driver = new webdriver.Builder().
              forBrowser('chrome').
              build();
    // action = new webdriver.ActionSequence(driver);
  },
  closeBrowser = function () {
    driver.close();
  },  
  tryAsyn = function (done) {
    var timer = 1500,
        second = (timer / 1000);
    // console.log('"Google Search" test will start after ' + second + ((second >= 10) ? (' seconds') : (' second')) );
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

  test.beforeEach(tryAsyn);

  test.afterEach(function () {
    // console.log('end');
  });

  test.describe('Test Tasks 1-1, search for "webdriver"', function () {
    var i = 0;
    test.before(openBrowser);

    test.after(closeBrowser);

    test.beforeEach(function () {
      i++;
      console.log('Start Test 1-1, Step ' + i);
    });

    test.afterEach(function () {
      console.log('End Test 1-1, Step ' + i);
    });

    // Step 1
    test.it('Open "Chrome" browser', function() {

      // based on node js "EventEmitter"
      EventEmitter.on('load', function () {
        console.log('loaded');
      });

      // trigger the load event
      EventEmitter.emit('load');

    });

    // Step 2
    test.it('Set browser full screen', function () {
      // set full screen
      driver.manage().window().maximize();      
    });

    // Step 3
    test.it('Enter "'+ url +'" url', function () {
      // Go the "url" page
      driver.get(url);
    });

    // Step 4
    test.it('Show Current browser width', function() {
      var js;
      // Run my js code
      js = 'return document.documentElement.clientWidth';
      driver.executeScript(js).then(function (val) {
        console.log('Current window width: ' + val + 'px');
      });
    });

    // send "esc" key
    // action.sendKeys(Key.ESCAPE).perform();

    // Step 5
    test.it('Send for "webdriver" on search field', function () {
      // try to checking things
      driver.findElement(By.name('q')).sendKeys(['webdriver' + Key.ESCAPE]);
      // The "click" means "mouse click"
      driver.findElement(By.name('btnK')).click();
    });

    // var name = 'Terry';
    // use assert, change the assert message
    // assert.equal(name, 'Terry', 'this name is not equal to "Terry"');

    // Step 6
    test.it('Check Current page title', function () {
      driver.wait(checkTitle('webdriver'), 5000, 'checking title end.');
      driver.getTitle().then(function (title) {
        console.log('Current page title: ' + title);
      });
    });

  });

  test.describe('Test Tasks 1-2, just guide yahoo page', function () {
    var url = 'http://www.yahoo.com.tw';
    
    test.before(openBrowser);

    test.after(closeBrowser);

    // Step 1
    test.it('Set browser full screen', function () {
      // set full screen
      driver.manage().window().maximize();
    });

    // Step 2
    test.it('Enter "'+ url +'" url', function () {
      // Go the "url" page
      driver.get(url);
    });

    // Step 3
    test.it('Show Current browser width', function() {
      var js;
      // Run my js code
      js = 'return document.documentElement.clientWidth';
      driver.executeScript(js).then(function (val) {
        console.log('Current window width: ' + val + 'px');
      });
    });
  });

});
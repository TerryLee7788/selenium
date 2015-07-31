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
 * setting modules from "basic_libs" module for this case
 * "global" object is node.js global environment, (just like "window" object in the browser)
 *******/

var lib_list = require('./lib/basic_libs').lib(global);

// https://nodejs.org/api/process.html
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

// fs => based on node js "File System" module
fs.readFile(__dirname + '/package.json', 'utf8', function (err, file) {
  if(!err) {
    console.log(JSON.parse(file).name);
  }
});

test.describe('Google Search - Test Tasks', function() {
  /* 
   * specify the timeout on the test
   * or you can just ("mocha test.js --timeout 15000" / "mocha test.js -t 15000")
   */
  this.timeout(current_timer);

  test.beforeEach(tryAsyn);

  test.afterEach(function () {
    // console.log('end');
  });

  // test.describe('Test Tasks 1-1, search for "webdriver"', function () {
  //   var i = 0;
  //   test.before(openBrowser);

  //   test.after(closeBrowser);

  //   test.beforeEach(function () {
  //     i++;

  //     var google_obj = {
  //       url: 'http://www.google.com/',
  //       field: 'q',
  //       keyword: 'webdriver',
  //       btn: 'btnK'
  //     };

  //     // Setup the basic data for the "search" function
  //     setUp(this, google_obj);

  //     console.log('Start Test 1-1, Step ' + i);
  //   });

  //   test.afterEach(function () {
  //     console.log('End Test 1-1, Step ' + i);
  //   });

  //   // Step 1
  //   test.it('Open "Chrome" browser', function() {

  //     // based on node js "EventEmitter"
  //     EventEmitter.on('load', function () {
  //       console.log('loaded');
  //     });

  //     // trigger the load event
  //     EventEmitter.emit('load');

  //   });

  //   // Step 2
  //   test.it('Set browser full screen', fullScreen);

  //   // Step 3
  //   test.it('Enter "'+ this.url +'" url', sendUrl);

  //   // Step 4
  //   test.it('Show Current browser width', function() {
  //     var js;
  //     // Run my js code
  //     js = 'return document.documentElement.clientWidth';
  //     this.driver.executeScript(js).then(function (val) {
  //       console.log('Current window width: ' + val + 'px');
  //     });
  //   });

  //   // Step 5
  //   test.it('Send for "webdriver" on search field', basic_actions.search);

  //   // var name = 'Terry';
  //   // use assert, change the assert message
  //   // assert.equal(name, 'Terry', 'this name is not equal to "Terry"');

  //   // Step 6
  //   test.it('Check Current page title', function () {
  //     this.driver.wait(checkTitle(this.keyword), 5000, 'checking title end.');
  //     this.driver.getTitle().then(function (title) {
  //       console.log('Current page title: ' + title);
  //     });
  //   });

  // });

  test.describe('Test Tasks 1-2, just guide yahoo page', function () {
    var url = 'http://www.yahoo.com.tw';
    
    test.before(openBrowser);

    test.after(closeBrowser);

    test.beforeEach(function () {
      var yahoo_obj = {
        url: 'http://www.yahoo.com.tw',
        field: 'UHSearchBox',
        keyword: 'Fackbook',
        btn: 'UHSearchWeb',
        site: 'yahoo'
      };

      // Setup the basic data for the "search" function
      setUp(this, yahoo_obj);
    });

    // Step 1
    test.it('Set browser full screen', fullScreen);

    // Step 2
    test.it('Enter "'+ url +'" url', sendUrl);

    // Step 3
    test.it('Show Current browser width', function() {
      var js;
      // Run my js code
      js = 'return document.documentElement.clientWidth';
      this.driver.executeScript(js).then(function (val) {
        console.log('Current window width: ' + val + 'px');
      });
    });

    // Step 4
    test.it('Seach things', basic_actions.search);
    console.log('fn: ' + basic_actions.search);
  });

});
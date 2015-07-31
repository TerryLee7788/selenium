exports.lib = function (target_global) {
  var lib = lib || {};
  lib.assert = require('assert');
  lib.test = require('selenium-webdriver/testing');
  lib.webdriver = require('selenium-webdriver');
  // lib.chrome = require('selenium-webdriver/chrome');
  lib.fs = require('fs');
  lib.By = lib.webdriver.By;
  lib.EventEmitter = new lib.webdriver.EventEmitter();
  lib.Key = lib.webdriver.Key;
  lib.until = lib.webdriver.until;
  lib.current_timer = 15000;

  // setup basic ations
  lib.basic_actions = {};

  lib.basic_actions.search = function () {
    // try to checking things
    this.driver.findElement(By.name(this.field)).sendKeys([this.keyword + Key.ESCAPE]);
    // The "click" means "mouse click"
    this.driver.findElement(By.name(this.btn)).click();
  };

  lib.setUp = function (tar, obj) {
    for (var i in obj) {
      tar[i] = obj[i];
    }
    console.log(obj.site)
    if (obj.site) {
      for (var j in lib.basic_actions) {
        lib.basic_actions[j] = lib[obj.site].basic_actions[j]
      }
      // lib.basic_actions.search = lib.yahoo.basic_actions.search;
    }
  };

  lib.fullScreen = function () {
    // set full screen
    this.driver.manage().window().maximize();      
  };

  lib.openBrowser = function () {
    this.driver = new webdriver.Builder().
              forBrowser('chrome').
              build();

    var obj = {
      driver: this.driver
    };
    setUp(this, obj);
  };

  lib.closeBrowser = function () {
    this.driver.close();
  };

  lib.checkTitle = function (title) {
    return until.titleContains(title);
  };

  lib.sendUrl = function () {
    // Go the "url" page
    this.driver.get(this.url);
  };
  lib.tryAsyn = function (done) {
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
  };
  lib.yahoo = {};
  lib.yahoo.basic_actions = {};

  lib.yahoo.basic_actions.search = function () {
    // try to checking things
    this.driver.findElement(By.id(this.field)).sendKeys([this.keyword + Key.ESCAPE]);
    // The "click" means "mouse click"
    this.driver.findElement(By.id(this.btn)).click();
  };

  for (var j in lib) {
    target_global[j] = lib[j];
  }

  return lib;
};
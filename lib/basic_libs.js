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

  for (var j in lib) {
    target_global[j] = lib[j];
  }

  return lib;
};
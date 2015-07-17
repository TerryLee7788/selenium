/*****
 * Reference doc
 *****
 * Mocha wiki
 * > https://github.com/mochajs/mocha/wiki/Using-mocha-programmatically
 *****
 * Mochaawesome
 * > http://adamgruber.github.io/mochawesome/
 *****
 * Can not find mocha module...? how to fixed this issue?
 * > http://stackoverflow.com/questions/13465829/node-js-modules-path
 * > https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders
 *****/

var Mocha = require('mocha'),
    path = require('path'),
    fs = require('fs'), mocha;

// 實例化 Mocha
mocha = new Mocha();

// fs.readdirSync(path), return an array
fs.readdirSync('./').filter(function (file) {
  return file.substr(-3) === '.js';
}).forEach(function (file) {
  mocha.addFile(
    path.join('./', file)
  );
});

// run the tests
mocha//.reporter('mochawesome')
     .run()
     .on('end', function () {
       console.log('done');
     });
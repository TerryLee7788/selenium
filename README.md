### selenium learning
### 安裝環境
[Node js](https://nodejs.org/)
### Steps
1. 先開啟 `node command line tool`, `mkdir selenium`
2. 接著將當前目錄移動`(cd)`到 `selenium` 資料夾底下
2. `npm init` create 出一個 `package.json` 檔案
3. 安裝 `node package`
4. `npm install selenium-webdriver --save`
4. `npm install chromedrive --save` *此步驟做完可以直接略過 `8, 9` 的步驟*
4. 安裝 `node package` 的時候, 記得處理好`依賴關係`, 之後要跟進的開發人員直接 `npm install` 即可
5. 安裝好了之後, 去下載 [chromedriver](http://chromedriver.storage.googleapis.com/index.html)
6. `chromedriver.exe` 這個檔案放到你的bin 底下, 記得去設定`環境變數`那邊, `PATH` 加入你的`chromedriver.exe`  所在的路徑
7. 重啟你的 `command line` tool.
8. 然後就可以用chrome 跑自動測試了!
9. 可以開始寫 test的 JS code 了!!

### Reference doc
- There is a good tutorial [here] (http://simpleprogrammer.com/2014/02/03/selenium-with-node-js/)
- Google Selenium [API] (http://selenium.googlecode.com/git/docs/api/javascript/index.html) and [here](https://code.google.com/p/selenium/wiki/WebDriverJs)

### Further Reading
- [How To Use Mocha With Node.js ...] (http://webapplog.com/tdd/)
- [The Difference Between TDD and BDD] (https://joshldavis.com/2013/05/27/difference-between-tdd-and-bdd/)
- [阿唷!! 有中文的捏] (http://teddy-chen-tw.blogspot.tw/2014/09/bddtdd.html)

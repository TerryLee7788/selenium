### selenium learning
1. 首先, 先 `npm init` create 出一個 `package.json` 檔案,
2. 接著 `npm install selenium-webdriver --save` 處理好依賴關係, 之後要跟進的開發人員直接 `npm install` 即可
3. 再來, `npm install chromedrive --save` 就可以直接略過 `4, 5` 的步驟
4. 安裝好了之後, 去下載 [chromedriver](http://chromedriver.storage.googleapis.com/index.html)
5. `chromedriver.exe` 這個檔案放到你的bin 底下, 記得去設定`環境變數`那邊, `PATH` 加入你的`chromedriver.exe`  所在的路徑
6. 重啟你的 `command line` tool.
7. 然後就可以用chrome 跑自動測試了!
8. 可以開始寫 test的 JS code 了!!

### Reference doc
- There is a good tutorial [here] (http://simpleprogrammer.com/2014/02/03/selenium-with-node-js/)
- Google Selenium [API] (http://selenium.googlecode.com/git/docs/api/javascript/index.html) and [here](https://code.google.com/p/selenium/wiki/WebDriverJs)

### Further Reading
- [How To Use Mocha With Node.js ...] (http://webapplog.com/tdd/)
- [The Difference Between TDD and BDD] (https://joshldavis.com/2013/05/27/difference-between-tdd-and-bdd/)
- [阿唷!! 有中文的捏] (http://teddy-chen-tw.blogspot.tw/2014/09/bddtdd.html)

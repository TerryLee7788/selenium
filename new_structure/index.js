var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    handlebars = require('express3-handlebars').create({ defaultLayout: 'main'});

app.set('port', process.env.PORT || 3000);

// set template engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

/*****
 * Reference doc
 *****
 * req.body
 * > http://expressjs.com/4x/api.html#req.body
 *****/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set routes
app.all('/', function (req, res) {
  // res.send('Hello');
  var json = (Object.keys(req.body).length) ? ({ data: req.body }) : ('');
  for (var i in req.body) {
    if (req.body[i] === '') {
      req.body = '';
      json = { data: req.body };
    }
  }
  res.render('index', json);
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.use(function (req, res) {
  res.status('404');
  res.render('404');
});

app.listen(app.get('port'), function () {
  console.log(' Your server started on http://localhost:' + app.get('port') + '\n press Ctrl-C to terminate.');
});
var express = require('express'),
    bodyParser = require('body-parser'),
    fs = require('fs'),
    hb = require('express3-handlebars'),
    handlebars = hb.create({ defaultLayout: 'main'}),
    app = express();

app.set('port', process.env.PORT || 3000);
// for (var i in hb) {
//   console.log(i + ': ' +hb[i]);
// }
// console.log(new hb.ExpressHandlebars().handlebars.compile);
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

function renderToString (source, data) {
  var template = new hb.ExpressHandlebars().handlebars.compile(source),
      out_put = template(data);
  return  out_put;
}

// set routes
app.all('/', function (req, res) {
  // res.send('Hello');
  // console.log(req.body);
  var json = (Object.keys(req.body).length) ? ({ data: req.body }) : ('');
  for (var i in req.body) {
    if (req.body[i] === '') {
      req.body = '';
      json = { data: req.body };
    }
  }
  if (Object.keys(req.body).length) {
    var str = '',
        code = '';
    fs.readFile('./views/layouts/main_js.handlebars', function (err, data) {
      if (err) { return console.log(err); }
      var source = data.toString();
      code = renderToString(source, req.body);

      fs.writeFile('./js_tmp/test.js', code, function (err) {
        if (err) { return console.log(err); }
      });
    });
  }
  res.render('index', json);
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.use(function (req, res) {
  res.status('404').render('404');
});

app.listen(app.get('port'), function () {
  console.log(' Your server started on http://localhost:' + app.get('port') + '\n press Ctrl-C to terminate.');
});
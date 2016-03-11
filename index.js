var fortune = require('./lib/fortune.js');

var express = require('express');

var app = express();

//设置handlebars视图引擎
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

//用在所有路由之前
app.use(express.static(__dirname + '/public'));

app.get('/',function(req, res){
	res.render('home');
});

app.get('/about',function(req, res){
	res.render('about', {fortune: fortune.getFortune()});
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.' );
});

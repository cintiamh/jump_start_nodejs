
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
<<<<<<< HEAD
  , fs = require('fs')
  , User = require('./models/User.js');
=======
  , fs = require('fs');
>>>>>>> 79d9bf526144dc5ff97b089a2899c1dd7b421afe

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
<<<<<<< HEAD

app.get('/form', function(req, res) {
=======
// Handles the routing to /form
app.get('/form', function(req, res) {
    // This line attempts to read form.html from the file system and serve the HTML file.
>>>>>>> 79d9bf526144dc5ff97b089a2899c1dd7b421afe
    fs.readFile('./form.html', function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end();
        }
        else {
<<<<<<< HEAD
            res.writeHead(200, { 'Content-Type': 'text/html' });
=======
            res.writeHead(200, {'Content-Type': 'text/html'});
>>>>>>> 79d9bf526144dc5ff97b089a2899c1dd7b421afe
            res.end(content, 'utf-8');
        }
    });
});

<<<<<<< HEAD
// App post
=======
>>>>>>> 79d9bf526144dc5ff97b089a2899c1dd7b421afe
app.post('/signup', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    User.addUser(username, password, function(err, user) {
        if (err) throw err;
        res.redirect('/form');
    });
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);

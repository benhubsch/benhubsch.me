var express = require('express')
var app = express()
var path = require('path')

var exphbs = require('express-handlebars')
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/about', function(req, res) {
    res.render('about')
})

// app.get('/contact', function(req, res) {
//     res.render('contact')
// })

// app.get('/campus', function(req, res) {
//     res.render('campus')
// })

app.get('/projects', function(req, res) {
    res.render('projects')
})

app.get('/blog', function(req, res) {
    res.render('blog')
})

app.get('/', function(req, res) {
    res.render('home')
})

app.get('/home', function(req, res) {
    res.redirect('/')
})

app.get('*',function (req, res) {
    res.redirect('/about');
});

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log('succesfully connected to port', port);
})
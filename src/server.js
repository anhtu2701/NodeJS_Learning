const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3001;

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({
    extended: true // Parse URL-encoded bodies with the querystring library
})); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies

// HTTP Logger
// app.use(morgan('combined'));

// Template Engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//  Cấu hình Route
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});

app.get('/search', (req, res) => {
    res.render('search');
});

app.post('/search', (req, res) => {

    console.log(req.body.q);
    res.send('');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
}) 
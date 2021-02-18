const express = require('express');
const app = express();
const port = 8000;
const hbs = require('express-handlebars');

// Some test data
const data = { pageTitle: "Edit profile", person: { firstname: "Patrick", lastname: "van der Bijl" }, age: 20, favorite: { movie: "Shooter", series: "Prison Break" } }

// Set express to use handlebars
app.engine('hbs', hbs( {
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'hbs');

// Set views directory as the directory where the template files are located
// app.set('views', './views');

// Serve public directory as a static directory
app.use(express.static('public'));

// Set routes
app.get('/', (req, res) => { res.redirect('/profile') }); // Redirect to /profile, as we only create a feature for the profile page
app.get('/profile', (req, res) => { res.render('profile', data) });

// Show 404 page if page doesn't exist
app.use(function (req, res, next) {
    res.status(404).send("This page doesn't exist!")
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
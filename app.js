const express = require('express');
const app = express();
const port = 8000;
const hbs = require('express-handlebars');
const slug = require('slug');
// const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: 'public/upload/' });

// Some test data
const data = [{ id: 1, fullname: "John Doe", description: "I'm a big fan of Marvel movies :)", username: "john.doe", email: "john.doe@gmail.com" }];

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
// app.get('/', (req, res) => { res.redirect('/profile') }); // Redirect to /profile, as we only create a feature for the profile page
// app.get('/profile', (req, res) => { res.render('edit_profile', data) });

function add(req, res) {
    console.log(req.body)

    const id = req.body.username.toLowerCase();

    res.redirect('/' + id);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => { res.render('edit_profile', data) });
app.post('/', upload.single('avatar'), add);
app.get('/:id', (req, res) => { res.render('profile', { output: req.params.id } ) });

// app.use(bodyParser.urlencoded({ extended: true })).get('/profile', form).post('/', upload.single('avatar'), add);

// Show 404 page if page doesn't exist
app.use((req, res, next) => {
    res.status(404).send("This page doesn't exist!")
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
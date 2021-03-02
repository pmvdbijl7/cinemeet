const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const verify = require('./controllers/verifyAccessToken');
const homeController = require('./controllers/homeController');

// Get .env Variables
const hostURL = process.env.URL;
const hostPort = process.env.PORT || 8000;
const dbConnection =
	'mongodb+srv://' +
	process.env.DB_USERNAME +
	':' +
	process.env.DB_PASSWORD +
	'@gettingstarted.35frc.mongodb.net/' +
	process.env.DB_NAME +
	'?retryWrites=true&w=majority';

// Import Routes
const authRoutes = require('./routes/authRoutes.js');
const profileRoutes = require('./routes/profileRoutes.js');

// Setup Templating Engine
app.engine(
	'hbs',
	hbs({
		extname: 'hbs',
		defaultLayout: 'main',
		layoutsDir: __dirname + '/views/layouts/',
		partialsDir: __dirname + '/views/partials/',
	})
);
app.set('view engine', 'hbs');

// Setup Public Directory as a Static Directory
app.use(express.static('public'));

// Middleware(s)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Connect to Database
mongoose.connect(
	dbConnection,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log('Succesfully Connected to Database!');
	}
);

// Get Home Page
app.get('/', verify, homeController.home_get);

// Route Middlewares
app.use(authRoutes);
app.use(profileRoutes);

// Show 404 Page if Page Doesn't Exists
app.use((req, res, next) => {
	const statusCode = 503;
	res.status(statusCode >= 100 && statusCode < 600 ? err.code : 500);
});

// Start Server at Given Host and Port
app.listen(hostPort, () => {
	console.log(`App Listening at ${hostURL}:${hostPort}`);
});

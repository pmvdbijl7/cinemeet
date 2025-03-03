const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const verifyAccess = require('./controllers/verifyAccessController');
const homeController = require('./controllers/homeController');

// Get .env Variables
const hostURL = process.env.URL;
const hostPort = process.env.PORT || 8000;
const dbConnection = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@gettingstarted.35frc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// Import Routes
const authRoutes = require('./routes/authRoutes.js');
const profileRoutes = require('./routes/profileRoutes.js');

// Setup Templating Engine
app.set('view engine', 'ejs');

// Setup Public Directory as a Static Directory
app.use(express.static('public'));

// Middleware(s)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Connect to Database
mongoose.connect(
	dbConnection,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: true,
	},
	() => {
		console.log('Succesfully Connected to Database!');
	}
);

// Get Home Page
app.get('/', verifyAccess, homeController.homeGet);

// Route Middlewares
app.use(authRoutes);
app.use(profileRoutes);

// Show 404 Page if Page Doesn't Exists
app.use((req, res, next) => {
	res.status(404).send('This page does not exist!');
});

// Start Server at Given Host and Port
app.listen(hostPort, () => {
	console.log(`App Listening at ${hostURL}:${hostPort}`);
});

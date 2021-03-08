const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
	registerValidation,
	loginValidation,
} = require('./validationController');
require('dotenv/config');

// Get Register page
const registerGet = (req, res) => {
	res.render('pages/auth/register', { layout: 'auth', title: 'Sign Up' });
};

// Register New User
const registerPost = async (req, res) => {
	// Validate Register Data
	const { error } = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// Hash Password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	// Create New User
	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: hashedPassword,
		name: null,
		biography: null,
	});

	user.save()
		.then((result) => {
			// Create accessToken and Assign to Cookie
			const accessToken = jwt.sign(
				{ _id: user._id },
				process.env.TOKEN_SECRET
			);
			res.cookie('accessToken', accessToken);

			// Redirect to Home
			res.redirect('/');
		})
		.catch((err) => {
			res.send(err.message);
		});
};

// Get Login Page
const loginGet = (req, res) => {
	res.render('pages/auth/login', { layout: 'auth', title: 'Sign In' });
};

// Login User
const loginPost = async (req, res) => {
	// Validate Login Data
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	// Check if Username is Correct
	const user = await User.findOne({ username: req.body.username });
	if (!user) return res.status(400).send('Your username is wrong.');

	// Check if Password is Correct
	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) return res.status(400).send('Your password is wrong.');

	// Create accessToken and Assign to Cookie
	const accessToken = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
	res.cookie('accessToken', accessToken);
	res.redirect('/');
};

// Logout User
const logout = (req, res) => {
	if (req.cookies.accessToken) {
		res.clearCookie('accessToken');
		res.redirect('/signin');
	}
};

module.exports = { registerGet, registerPost, loginGet, loginPost, logout };

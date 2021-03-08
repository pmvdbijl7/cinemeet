// Import Model
const User = require('../models/User');
const multer = require('multer');
const path = require('path');

// Get User Profile Page
const userGet = (req, res) => {
	const username = req.params.username;
	const authUser = req.user._id;

	User.findOne({ username: username }).then((result) => {
		try {
			res.render('pages/profile/view', {
				title: result.username,
				authUser: authUser,
				user: result.toJSON(),
			});
		} catch (err) {
			res.status(404).send('This page does not exist!');
		}
	});
};

// Get User Edit Page
const userEditGet = (req, res) => {
	const authUser = req.user._id;

	User.findById(authUser).then((result) => {
		res.render('pages/profile/edit', {
			title: 'Edit profile',
			user: result.toJSON(),
		});
	});
};

// Update User
const userUpdate = (req, res) => {
	const authUser = req.user._id;

	User.findByIdAndUpdate(authUser, req.body).then(() => {
		User.findOne({ authUser }).then((result) => {
			res.redirect(`/${req.params.username}`);
		});
	});
};

module.exports = {
	userGet,
	userEditGet,
	userUpdate,
};

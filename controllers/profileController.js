// Import Model
const User = require('../models/User');

const user_get = (req, res) => {
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

const user_edit_get = (req, res) => {
	const authUser = req.user._id;

	User.findById(authUser).then((result) => {
		res.render('pages/profile/edit', {
			title: 'Edit profile',
			user: result.toJSON(),
		});
	});
};

const user_edit_post = (req, res) => {
	console.log(req.body);
};

module.exports = { user_get, user_edit_get, user_edit_post };

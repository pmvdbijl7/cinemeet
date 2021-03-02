// Import Model
const User = require('../models/User');

const user_get = (req, res) => {
	const username = req.params.username;

	User.findOne({ username: username }).then((result) => {
		try {
			res.render('profile', {
				title: result.username,
				user: result.toJSON(),
			});
		} catch (err) {
			res.status(404).send('This page does not exist!');
		}
	});
};

module.exports = { user_get };

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

module.exports = { user_get };

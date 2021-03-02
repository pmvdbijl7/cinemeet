// Import Model
const User = require('../models/User');

const home_get = (req, res) => {
	// Get User id
	const id = req.user._id;

	// Get User Data
	User.findById(id).then((result) => {
		res.render('home', {
			title: 'Home',
			user: result.toJSON(),
		});
	});
};

module.exports = { home_get };

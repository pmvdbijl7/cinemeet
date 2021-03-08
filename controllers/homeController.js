// Import Model
const User = require('../models/User');

const homeGet = (req, res) => {
	// Get Logged In User ID
	const authUser = req.user._id;

	// Get User Data
	User.findById(authUser).then((result) => {
		res.render('pages/index', {
			title: 'Home',
			user: result.toJSON(),
		});
	});
};

module.exports = { homeGet };

const router = require('express').Router();
const verify = require('../controllers/verifyAccessToken');

// Import Controllers
const profileController = require('../controllers/profileController');
const uploadController = require('../controllers/uploadController');

router.get('/:username', verify, profileController.user_get);
router.get('/:username/edit', verify, profileController.user_edit_get);
router.post(
	'/:username/edit',
	verify,
	uploadController.uploadProfilePicture,
	profileController.user_edit_post
);

module.exports = router;

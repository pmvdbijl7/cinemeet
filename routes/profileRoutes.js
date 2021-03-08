const router = require('express').Router();
const verifyAccess = require('../controllers/verifyAccessController');

// Import Controllers
const profileController = require('../controllers/profileController');
const uploadController = require('../controllers/uploadController');

// User Profile Page
router.get('/:username', verifyAccess, profileController.userGet);

// User Edit Page
router.get('/:username/edit', verifyAccess, profileController.userEditGet);
router.post(
	'/:username/edit',
	verifyAccess,
	uploadController.uploadProfilePicture,
	profileController.userUpdate
);

module.exports = router;

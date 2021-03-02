const router = require('express').Router();
const verify = require('../controllers/verifyAccessToken');

// Import Controller
const profileController = require('../controllers/profileController');

router.get('/:username', verify, profileController.user_get);

module.exports = router;

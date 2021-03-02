const router = require('express').Router();
const verify = require('../controllers/verifyAccessToken');

// Import Controller
const profileController = require('../controllers/profileController');

router.get('/:username', verify, profileController.user_get);
router.get('/:username/edit', verify, profileController.user_edit_get);
router.post('/:username/edit', verify, profileController.user_edit_post);

module.exports = router;

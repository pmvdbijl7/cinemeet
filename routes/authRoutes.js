const router = require('express').Router();
const authController = require('../controllers/authController');

// Register Routes
router.get('/signup', authController.register_get);
router.post('/signup', authController.register_post);

// Login Routes
router.get('/signin', authController.login_get);
router.post('/signin', authController.login_post);

// Logout
router.get('/logout', authController.logout);

module.exports = router;

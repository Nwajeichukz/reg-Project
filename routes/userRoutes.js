const express = require('express');
const userControllers = require('../controllers/userController');

const router = express.Router();

router.get('/', userControllers.getAllUser);
router.get('/:id', userControllers.getId);
router.post('/signup', userControllers.signup);
router.post('/login', userControllers.login);

module.exports = router;

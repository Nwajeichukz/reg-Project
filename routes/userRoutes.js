const express = require('express');
const userControllers = require('../controllers/userController');

const router = express.Router();

router.post('/auth/signup', userControllers.signup);
router.post('/auth/login', userControllers.login);

router.get('/user/:id', userControllers.getId);
router.get('/user', userControllers.getAllUser);

router.patch('/user/:id', userControllers.updateUser);

router.delete('/user/:id', userControllers.deleteUser);


module.exports = router;

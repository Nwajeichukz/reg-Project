const express = require('express');
const bankControllers = require('../controllers/bankController');

const router = express.Router();


router.get('/', bankControllers.getBanks);

module.exports = router;
 
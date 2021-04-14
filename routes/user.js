const express = require('express');
const router = express.Router();

const User = require('../models/user.js');
var user_controller = require('../controller.js');

// GET request for one user
router.get('/user/:id', user_controller.getUserAccount);

// POST request for update user's detail 
router.post('/user/:id/update', user_controller.resetUser);

// POST request for update user's detail 
//router.post('/:id/email', user_controller.user_email_post);

module.exports = router;
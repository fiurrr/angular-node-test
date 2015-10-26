'use strict';

var express = require('express');
var controller = require('./auth.controller');
var User = require('../user/user.model');
var authService = require('./auth.service');

var router = express.Router();

require('./setup')(User);

router.post('/', controller.login);
router.delete('/', authService.isAuthenticated(), controller.logout);

module.exports = router;

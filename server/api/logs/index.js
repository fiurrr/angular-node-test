'use strict';

var express = require('express');
var controller = require('./logs.controller');
var authService = require('../auth/auth.service');

var router = express.Router();

router.get('/', authService.hasRole('admin'), controller.list);

module.exports = router;
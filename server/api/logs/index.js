'use strict';

var express = require('express');
var controller = require('./logs.controller');

var router = express.Router();

router.get('/', controller.list);

module.exports = router;
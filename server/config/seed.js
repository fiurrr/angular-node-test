/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Log = require('../api/logs/logs.model');

Log.find({}).remove(function () {
    console.log('log cleaned');
});

User.find({}).remove(function () {
    User.create({
        username: 'user',
        password: 'password'
    }, {
        username: 'manager',
        password: 'password'
    }, {
        username: 'developer',
        password: 'password'
    }, {
        username: 'tester',
        password: 'password'
    }, {
        username: 'admin',
        password: 'password',
        role: 'admin'
    });
});

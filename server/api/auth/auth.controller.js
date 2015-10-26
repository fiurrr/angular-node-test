'use strict';

var _ = require('lodash');
var passport = require('passport');
var authService = require('./auth.service');
var User = require('../user/user.model');
var Log = require('../logs/logs.model');

exports.login = function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        var error = err || info;
        if (error) {
            logLogin('AUTH_FAILURE', req.body.username, req.connection.remoteAddress, function () {
                return res.status(401).json(error);
            });
        } else if (!user) {
            logLogin('AUTH_FAILURE', req.body.username, req.connection.remoteAddress, function () {
                return res.status(404).json({message: 'Something went wrong, please try again.'});
            });
        } else {
            logLogin('AUTH_SUCCESS', user.username, req.connection.remoteAddress, function () {
                var token = authService.signToken(user._id, user.role);
                res.json({token: token, role: user.role, username: user.username});
            });
        }
    })(req, res, next)
};

exports.logout = function (req, res) {
    req.logout();
    res.status(200).json({success: true});
};

function logLogin(type, username, ip, callback) {
    Log.create({
        action: type,
        username: username,
        timestamp: (new Date()).getTime(),
        ip: ip
    }, function(err, thing) {
        if(err) { return handleError(res, err); }
        return callback();
    });
}

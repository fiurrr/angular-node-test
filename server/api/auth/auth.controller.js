'use strict';

var _ = require('lodash');
var passport = require('passport');
var authService = require('./auth.service');
var User = require('../user/user.model');

exports.login = function(req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    var error = err || info;
    if (error) return res.status(401).json(error);
    if (!user) return res.status(404).json({message: 'Something went wrong, please try again.'});

    var token = authService.signToken(user._id, user.role);
    res.json({token: token, role: user.role,  username: user.username});
  })(req, res, next)
};

exports.logout = function(req, res) {
  req.logout();
  res.status(200).json({success: true});
};

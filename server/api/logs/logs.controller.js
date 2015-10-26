'use strict';

var _ = require('lodash');
var Log = require('./logs.model');

exports.list = function (req, res) {
    Log.find(function (err, logs) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json({logs: logs});
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}
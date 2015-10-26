'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LogSchema = new Schema({
  ip: String,
  timestamp: String,
  action: String,
  username: String
});

module.exports = mongoose.model('Log', LogSchema);
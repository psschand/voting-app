'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	github: {
		id: String,
		displayName: String
	},
	polls:{
		pollIDs: [String]
	}
});

module.exports = mongoose.model('User', User);


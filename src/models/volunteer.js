/** @format */

const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
	volunteer_name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	eventName: {
		type: String,
		required: true,
	},
});

module.exports = new mongoose.model('volunteerSchema', volunteerSchema);

/** @format */

const mongoose = require('mongoose');

const donatorSchema = new mongoose.Schema({
	donator_name: {
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
	amount: {
		type: Number,
		required: true,
	},
});

module.exports = new mongoose.model('DonatorSchema', donatorSchema);

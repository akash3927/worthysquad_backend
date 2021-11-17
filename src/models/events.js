/** @format */

const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const eventSchema = new mongoose.Schema(
	{
		eventTitle: {
			type: String,
			required: true,
			// unique: true,
		},
		description: {
			type: String,
			required: true,
		},
		eventPicture: {
			type: String,
			contentType: String,
		},
		category: {
			type: String,
			enum: [
				'Women And Children',
				'Medical',
				'Food And Hunger',
				'Education',
				'Animals',
				'Enviorment',
			],
		},
		address: {
			type: String,
			required: true,
		},
		location: {
			type: {
				type: String,
				enum: ['Point'],
			},
			coordinates: {
				type: [Number],
				index: '2dsphere',
			},
			formattedAddress: String,
		},
	},
	{ timestamps: true },
);

//geocoder & create location

eventSchema.pre('save', async function (next) {
	const loc = await geocoder.geocode(this.address);
	this.location = {
		type: 'Point',
		coordinates: [loc[0].longitude, loc[0].latitude],
		formattedAddress: loc[0].formattedAddress,
	};
	next();
});
module.exports = mongoose.model('Events', eventSchema);

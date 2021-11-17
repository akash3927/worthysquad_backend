/** @format */

const Event = require('../models/events');
const fs = require('fs');

exports.createEvent = async (req, res) => {
	// const { eventTitle, description, category } = req.body;
	const eventPicture = req.file;
	eventPicture.data = fs.readFileSync(eventPicture.path);
	eventPicture.contentType = eventPicture.mimeType;
	try {
		const addEvent = new Event({
			eventTitle: req.body.eventTitle,
			description: req.body.description,
			eventPicture: eventPicture.path,
			category: req.body.category,
			address: req.body.address,
		});
		const savedEvent = await addEvent.save();
		res.status(200).json(savedEvent);
	} catch (error) {
		res.status(500).json(error);
		console.error(error);
	}
};

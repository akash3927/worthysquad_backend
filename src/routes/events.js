/** @format */

const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createEvent } = require('../controllers/events');
const Event = require('../models/events');
const path = require('path');

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads');
	},
	filename: function (req, file, cb) {
		// const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: storage });

router.post('/addevent', upload.single('eventPicture'), createEvent);

router.get('/getevents', async (req, res) => {
	try {
		const getEvents = await Event.find({});
		res.status(200).json(getEvents);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.get('/getEvent/:id', async (req, res) => {
	const _id = req.params.id;
	const getEvent = await Event.findById(_id);
	res.status(200).json(getEvent);
});

router.put('/updateEvent/:id', async (req, res) => {
	const _id = req.params.id;
	const updateEvent = await Event.findByIdAndUpdate(_id, req.body);
	res.status(200).json(updateEvent);
});

router.delete('/deleteEvent/:id', async (req, res) => {
	const _id = req.params.id;
	const deleteEvent = await Event.findByIdAndDelete(_id);
	res.status(200).json(deleteEvent);
});

module.exports = router;

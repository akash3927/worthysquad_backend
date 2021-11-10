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

router.get('/getEvent/:id', async (req, res) => {
	const _id = req.params.id;
	const getEvent = await Event.findById(_id);
	res.status(200).json(getEvent);
});

router.put('/', async (req, res) => {});

router.delete('/', async (req, res) => {});

module.exports = router;

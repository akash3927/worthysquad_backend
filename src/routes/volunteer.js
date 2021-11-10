/** @format */

const express = require('express');
const router = express.Router();
const Volunteer = require('../models/volunteer');

router.post('/newVolunteer', async (req, res) => {
	try {
		const newVolunteer = new Volunteer(req.body);
		const savedVolunteer = await newVolunteer.save();
		res.status(201).json(savedVolunteer);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.get('/getVolunteers', async (req, res) => {
	try {
		const getVolunteer = await Volunteer.find({});
		res.status(200).json(getVolunteer);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.get('/getVolunteer/:email', async (req, res) => {
	try {
		const email = req.params.email;
		const getVolunteer = await Volunteer.findOne({ email });
		res.status(200).json(getVolunteer);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.patch('/updateVolunteer/:email', (req, res) => {});

module.exports = router;

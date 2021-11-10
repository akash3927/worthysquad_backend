/** @format */

const express = require('express');
const router = express.Router();
const Donator = require('../models/donator');

router.post('/newDonator', async (req, res) => {
	try {
		const newDonator = new Donator(req.body);
		const savedDonator = await newDonator.save();
		res.status(201).json(savedDonator);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.get('/getDonators', async (req, res) => {
	try {
		const getDonator = await Donator.find({});
		res.status(200).json(getDonator);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.get('/getDonator/:email', async (req, res) => {
	try {
		const email = req.params.email;
		const getDonator = await Donator.findOne({ email });
		res.status(200).json(getDonator);
	} catch (error) {
		res.status(400).json(error);
	}
});

router.patch('/updatedonator/:email', (req, res) => {});

module.exports = router;

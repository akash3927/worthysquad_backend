/** @format */
const express = require('express');
const router = express.Router();

const userRoutes = require('./auth');
const eventRoutes = require('./events');
const donatorRoutes = require('./donator');
const volunteerRoutes = require('./volunteer');

router.get('/', (req, res) => {
	try {
		console.log('hello');
		return res.send('<h1>hello world!</h1>');
	} catch (error) {
		console.error(error);
	}
});

router.use('/user', userRoutes);
router.use('/event', eventRoutes);
router.use('/donator', donatorRoutes);
router.use('/volunteer', volunteerRoutes);

router.get('/simple', (req, res) => {
	res.send('hello');
});
module.exports = router;

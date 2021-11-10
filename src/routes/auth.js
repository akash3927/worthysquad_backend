/** @format */

const express = require('express');
const { signup, signin, requiresignin } = require('../controllers/auth');
const { check } = require('express-validator');
const router = express.Router();
const User = require('../models/auth');
const {
	isRequestValidated,
	validateSignupRequest,
	validateSigninRequest,
} = require('../validators/auth');

router.post('/signin', validateSigninRequest, isRequestValidated, signin);
router.post('/signup', validateSignupRequest, isRequestValidated, signup);

// router.post('/profile', requiresignin, (req, res) => {
// 	res.status(200).json({ user: 'profile' });
// });
module.exports = router;

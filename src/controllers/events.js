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
			category: 'education',
			address: req.body.address,
		});
		const savedEvent = await addEvent.save();
		res.status(200).json(savedEvent);
	} catch (error) {
		res.status(500).json(error);
		console.error(error);
	}
};

// 'use strict';
// const nodemailer = require('nodemailer');

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
// 	// Generate test SMTP service account from ethereal.email
// 	// Only needed if you don't have a real mail account for testing
// 	let testAccount = await nodemailer.createTestAccount();

// 	// create reusable transporter object using the default SMTP transport
// 	let transporter = nodemailer.createTransport({
// 		host: 'smtp.ethereal.email',
// 		port: 587,
// 		secure: false, // true for 465, false for other ports
// 		auth: {
// 			user: testAccount.user, // generated ethereal user
// 			pass: testAccount.pass, // generated ethereal password
// 		},
// 	});

// 	// send mail with defined transport object
// 	let info = await transporter.sendMail({
// 		from: '"Fred Foo 👻" <foo@example.com>', // sender address
// 		to: 'bar@example.com, baz@example.com', // list of receivers
// 		subject: 'Hello ✔', // Subject line
// 		text: 'Hello world?', // plain text body
// 		html: '<b>Hello world?</b>', // html body
// 	});

// 	console.log('Message sent: %s', info.messageId);
// 	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// 	// Preview only available when sending through an Ethereal account
// 	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
// 	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

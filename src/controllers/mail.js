/** @format */

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
	},
});

const sendMail = (email) => {
	const mailOptions = {
		from: 'akashkothawade77@gmail.com',
		to: email,
		subject: 'testing and testing',
		text: 'it works',
	};

	transporter.sendMail(mailOptions, function (err, data) {
		if (err) {
			console.log('error occurs', err);
		} else {
			console.log('email sent');
		}
	});
};
module.exports = sendMail;

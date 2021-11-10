/** @format */

const express = require('express');
const app = express();
const env = require('dotenv').config();
const conn = require('./src/db/conn');
const userRoutes = require('./src/routes/auth');
const eventRoutes = require('./src/routes/events');
const donatorRoutes = require('./src/routes/donator');
const volunteerRoutes = require('./src/routes/volunteer');

app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', eventRoutes);
app.use('/api', donatorRoutes);
app.use('/api', volunteerRoutes);

app.listen(process.env.PORT, () => {
	console.log(`app is running on ${process.env.PORT}`);
});

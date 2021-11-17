/** @format */

const express = require('express');

const app = express();
const env = require('dotenv').config();
const cors = require('cors');
const conn = require('./src/db/conn');
const mainRoutes = require('./src/routes/mainrouter');

// var corsOptions = {
// 	origin: 'http://localhost:8081',
// };
// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('<h1>hello world!</h1>');
});

app.use('/api', mainRoutes);
app.use('/uploads', express.static('uploads'));

app.listen(process.env.PORT, () => {
	console.log(`app is running on ${process.env.PORT}`);
});

//var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

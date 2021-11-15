/** @format */

//mongodb+srv://akash:<password>@worthysquad.il4an.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoose = require('mongoose');
mongoose
	.connect(
		`mongodb+srv://akash:${process.env.MONGO_DB_PASSWORD}@worthysquad.il4an.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	)
	.then(() => {
		console.log('database connected');
	})
	.catch((err) => {
		console.error(err);
	});

//mongodb+srv://akash:${process.env.MONGO_DB_PASSWORD}@worthysquad.il4an.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority
//mongodb://localhost:27017/worthysquad

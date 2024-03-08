const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/whatsappUser').then(() => {
	console.log('connect to DB');
});

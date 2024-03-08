const mongoose = require('mongoose');

const users = mongoose.Schema({
	name: String,
	email: String,
	password: String,
});

const USER = mongoose.model('user', users);

module.exports = USER;

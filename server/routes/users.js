const express = require('express');
const route = express.Router();
const USER = require('../models/users');

route.get('/users', async (req, res) => {
	try {
		const users = await USER.find();
		res.json(users);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
});

route.post('/users', async (req, res) => {
	try {
		const { name, email, password } = req.body;

		const existingUser = await USER.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: 'User already registered' });
		}

		const newUser = new USER({ name, email, password });
		await newUser.save();

		res.status(201).json(newUser);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
});

route.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await USER.findOne({ email });
		if (!user) {
			return res
				.status(400)
				.json({ message: 'Invalid email or password' });
		}

		if (user.password !== password) {
			return res
				.status(400)
				.json({ message: 'Invalid email or password' });
		}

		res.status(200).send({ message: 'Login successful', user });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
});

module.exports = route;

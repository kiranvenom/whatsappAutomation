const express = require('express');
const PORT = 5000;
require('./conn');
const cors = require('cors');
const routes = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', async (req, res) => {
	res.send('hi');
});

app.listen(PORT, () => {
	console.log('running on PORT :: ' + PORT);
});

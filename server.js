const express = require('express');
const { sequelize, Flashcard } = require('./models');

const app = express();
const port = 3335;
app.use(express.json());

app.get('/', (req, res) => {
	res.send('<h1>Flashcard API</h1>');
});

app.listen(port, async () => {
	console.log(`listening on http://localhost:${port}`);
	await sequelize.sync();
});
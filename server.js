const express = require('express');
const { sequelize, Flashcard } = require('./models');

const app = express();
const port = 3335;
app.use(express.json());

app.get('/', (req, res) => {
	res.send('<h1>Flashcard API</h1>');
});

app.post('/flashcards', async (req, res) => {
	const { category, front, back } = req.body;
	try {
		const flashcard = await Flashcard.create({ category, front, back });
		return res.json(flashcard);
	} catch (err) {
		console.log(err);
		return res.status(500);
	}
});

app.get('/flashcards', async (req, res) => {
	try {
		const flashcards = await Flashcard.findAll();
		return res.json(flashcards);
	} catch (err) {
		console.log(err);
		return res.status(500);
	}
});

app.listen(port, async () => {
	console.log(`listening on http://localhost:${port}`);
	await sequelize.sync();
});
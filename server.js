const express = require('express');

const app = express();
const port = 3335;

app.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});
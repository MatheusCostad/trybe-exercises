const express = require('express');
const bodyParser = require('body-parser');
const Book = require('./controllers/Book');
const Author = require('./controllers/Author');
const errorMiddleware = require('./middleware/error');

const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use(errorMiddleware);

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);

app.get('/books', Book.getAll);
app.get('/books/search', Book.getByAuthorId);
app.get('/books/:id', Book.findById);
app.post('/books', Book.create);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  return res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);
  if (!author) return res.status(404).json({ message: 'Not found' });
  return res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  const author = await Author.create(first_name, middle_name, last_name);
  return res.status(201).json({ author });
});

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();
  return res.status(200).json(books);
});

app.get('/books/search', async (req, res) => {
  const { author_id } = req.query;
  const books = await Book.getByAuthorId(author_id);
  if (!books) return res.status(404).json({ message: 'Not found' });
  return res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  if (!book) return res.status(404).json({ message: 'Not found' });
  return res.status(200).json(book);
});


app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  const valid = await Book.isValid(title, author_id)
  if (!valid) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }
  const newBook = await Book.create(title, author_id);
  return res.status(201).json(newBook);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});


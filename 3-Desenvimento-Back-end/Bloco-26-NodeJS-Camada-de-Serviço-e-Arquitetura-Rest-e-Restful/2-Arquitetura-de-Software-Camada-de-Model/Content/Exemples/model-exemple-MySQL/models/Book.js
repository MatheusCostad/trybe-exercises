const connection = require('./connection');

const serialize = ({ id, title, author_id }) => ({ id, title, authorId: author_id });

const getAll = async () => {
  const [ books ] = await connection.execute(
      'SELECT * FROM model_example.books;',
  );
  return books.map(serialize);
};

const findById = async (id) => {
  const allBooks = await getAll();
  const book = allBooks.find((book) => parseFloat(book.id) === parseFloat(id));
  if (!book) return null
  return book
}

const getByAuthorId = async (id) => {
  const allBooks = await getAll();
  const filteredBooks = allBooks.filter(({ authorId }) => parseFloat(authorId) === parseFloat(id));
  if (filteredBooks.length === 0) return null;
  return filteredBooks;
}

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string') return false;
  if (!authorId) return false;
  const [authors] = await connection.execute(
    'SELECT id FROM model_example.authors;',
  );
  return authors.some((author) => parseFloat(author.id) === parseFloat(authorId));
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
  [title, parseFloat(authorId)],
);

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create,
}
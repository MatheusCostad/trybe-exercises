const Book = require('../models/Book');
const Author = require('../models/Author');

const getAll = async () => Book.getAll();

const findById = async (id) => {
  const book = await Book.findById(id);
  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um livro com o id ${id}`,
      },
    };
  }

  return book;
}

const create = async (title, authorId) => {
  const author = await Author.findById(authorId);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: 'Autor não encontrado',
      },
    };
  }

  return Book.create(title, authorId);
};

const getByAuthorId = async (id) => {
  const book = await Book.getByAuthorId(id);
  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar um livro com o author_id ${id}`,
      },
    };
  }

  return book;
};

module.exports = {
  getAll,
  findById,
  getByAuthorId,
  create
}
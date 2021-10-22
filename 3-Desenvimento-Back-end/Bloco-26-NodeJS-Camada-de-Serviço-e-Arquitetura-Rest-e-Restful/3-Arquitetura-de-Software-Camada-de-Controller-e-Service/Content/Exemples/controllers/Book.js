const Joi = require('joi');
const rescue = require('express-rescue');
const service = require('../services/Book');

const getAll = rescue(async (_req, res) => {
  const books = await service.getAll();
  return res.status(200).json(books);
});

const getByAuthorId = rescue( async (req, res, next) => {
  const { author_id } = req.query;
  const books = await service.getByAuthorId(author_id);
  if (books.error) return next(books.error);
  return res.status(200).json(books);
});

const findById = rescue(async (req, res, next) => {
  const { id } = req.params;
  const book = await service.findById(id);
  if (book.error) return next(book.error);
  return res.status(200).json(book);
});

const create = rescue(async (req, res) => {
  const { error } = Joi.object({
    title: Joi.string().not().empty().required(),
    author_id: Joi.number().not().empty().required(),
  }).validate(req.body);
  if (error) {
    return next(error);
  }
  const { title, author_id } = req.body;
  const newBook = await service.create(title, author_id);
  if (newBook.error) return next(newBook.error);
  return res.status(201).json(newBook);
});

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  create
}
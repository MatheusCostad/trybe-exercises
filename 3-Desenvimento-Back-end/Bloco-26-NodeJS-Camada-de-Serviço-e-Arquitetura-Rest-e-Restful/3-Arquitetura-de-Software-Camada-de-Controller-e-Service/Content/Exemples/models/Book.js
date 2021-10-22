const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = () => {
  return connection()
  .then((db) => db.collection('books').find().toArray())
    .then((books) =>
      books.map(({ _id, title, author_id }) => ({
        id: _id,
        title,
        authorId: author_id,
      })
    )
  );
}

const getByAuthorId = async (id) => {
  const db = await connection();
  const books = await db.collection('books').find().toArray();
  const filteredBooks = books.filter(({ author_id: authorId }) => parseFloat(authorId) === parseFloat(id));
  return filteredBooks;
}

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  const bookData = await db.collection('books').findOne(new ObjectId(id));
  if (!bookData) return null;
  return { id: bookData._id, title: bookData.title, authorId: bookData.author_id };
};

const create = async (title, authorId) => {
  const db = await connection();
  const inserted = await db.collection('books').insertOne({ title, authorId });
  return {
    id: inserted.insertedId,
    title,
    authorId
  }
}

const findByName = async (title) => {
  const book = await connection()
    .then((db) => db.collection('books').findOne({ title }));
  if (!book) return null;
  return book;
};

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  create,
  findByName,
}
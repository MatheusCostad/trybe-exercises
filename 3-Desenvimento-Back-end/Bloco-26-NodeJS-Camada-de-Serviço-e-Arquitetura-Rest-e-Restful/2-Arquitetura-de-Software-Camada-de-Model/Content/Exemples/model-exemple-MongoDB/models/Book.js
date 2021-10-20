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
  if (filteredBooks.length === 0) return null;
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

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string') return false;
  if (!authorId) return false;
  return true;
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

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create
}
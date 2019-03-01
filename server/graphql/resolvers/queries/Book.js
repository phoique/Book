const bookModel = require('../../../models/Book');
const authorModel = require('../../../models/Author');

const Book = {

  Query: {

    book: async (_, args) => 
      await bookModel.findById(args.id),
    
    books: async (_, args) => 
      await bookModel.find({})

  },

  Book: {
    author: async (parent) => 
      await authorModel.findById(parent.author_id) 
  },

};

module.exports = Book;
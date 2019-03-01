const bookModel = require('../../../models/Book');
const authorModel = require('../../../models/Author');

const Author = {

  Query: {
    author: async (_, args) => 
      await authorModel.findById(args.id),
    
    authors: async (_, args) => 
      await authorModel.find({})
  },

  Author: {
    books: async (parent) => 
      await bookModel.find({ author_id: parent.id })
  },

};

module.exports = Author;
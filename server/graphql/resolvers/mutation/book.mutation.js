const bookModel = require('../../../models/Book');

const BookMutation = {

  Mutation: {

    // args => { input: { author_id: "id", name: "name", genre: "genre" } }
    createBook: async (_, { input: { author_id, name, genre }}) => {

      let newBook = new bookModel({ 
        author_id, 
        name, 
        genre 
      });

      return await newBook.save();
    }

  }

};

module.exports = BookMutation;
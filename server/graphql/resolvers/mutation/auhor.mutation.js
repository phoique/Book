const authorModel = require('../../../models/Author');

const AuthorMutation = {

  Mutation: {

    // args => input: { name: "a", age: "b" }
    createAuthor: async (_, { input: { name, age }}) => {

      let newAuthor = new authorModel({name, age});

      // new author 
      return await newAuthor.save();

    }

  }

};

module.exports = AuthorMutation;
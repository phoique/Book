const Book = require('./queries/Book');
const Author = require('./queries/Author');
const AuthorMutation = require('./mutation/auhor.mutation');
const BookMutation = require('./mutation/book.mutation');

// resolvers: [x, y, z]
let resolvers = [Author, Book, AuthorMutation, BookMutation];

module.exports = resolvers;
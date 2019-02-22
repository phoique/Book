const graphql = require('graphql');
const _ = require('lodash');

// Models
const Book = require('../models/Book');
const Author = require('../models/Author');

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    author_id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        //return _.find(Authors, {id: parent.author_id});
        return Author.findById(parent.author_id);
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        //return _.filter(Books, {author_id: parent.id});
        return Book.find({ author_id: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {

    book: {
      type: BookType,
      args: {id: { type: GraphQLID }},
      resolve(parent, args) {
        //return _.find(Books, {id: args.id});
        return Book.findById(args.id);
      }
    },

    author: {
      type: AuthorType,
      args: {id: { type: GraphQLID }},
      resolve(parent, args) {
        //return _.find(Authors, {id: args.id});
        return Author.findById(args.id);
      }
    },

    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args){
        return Book.find({});
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args){
          return Author.find({});
      }
    }

  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          age: args.age
        });

        // Author added.
        return author.save();
      }
    },
    addBook: {
      type: BookType,
      args: {
        author_id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let book = new Book({
          author_id: args.author_id,
          name: args.name,
          genre: args.genre
        });

        // Book added
        return book.save();
      }
    }
  }

});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
const graphql = require('graphql');
const _ = require('lodash');

const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql;

var Books = [
  { id: '1', author_id: '1', name: 'İçimizdeki Şeytan', genre: 'Edebiyat' },
  { id: '2', author_id: '2', name: 'Benim Kedilerim', genre: 'Deneme' },
  { id: '3', author_id: '3', name: 'İkinci Waliz', genre: 'Şiir' },
];

var Authors = [
  { id: '1', name: 'Sabahattin Ali', age: 25 },
  { id: '2', name: 'Gürbüz Doğan Ekşioğlu', age: 32 },
  { id: '3', name: 'Küçük İskender', age: 39 }
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return _.find(Authors, {id: parent.author_id})
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {

    book: {
      type: BookType,
      args: {id: { type: GraphQLID }},
      resolve(parent, args) {
        return _.find(Books, {id: args.id});
      }
    },

    author: {
      type: AuthorType,
      args: {id: { type: GraphQLID }},
      resolve(parent, args) {
        return _.find(Authors, {id: args.id});
      }
    }

  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
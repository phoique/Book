const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

var Books = [
  { id: '1', name: 'Dünya Yeni bir başlangıç', genre: 'Bilim kurgu' },
  { id: '2', name: 'İnsanız ayıbı yok', genre: 'Kişisel gelişim' },
  { id: '3', name: 'Bir Psikiyatristin Gizli Defteri', genre: 'Piskolojik' },

];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'rootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {id: { type: GraphQLString }},
      resolve(parent, args) {
        return Books.find(book => book.id === args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
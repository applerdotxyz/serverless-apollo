import { ApolloServer, IResolvers, gql } from 'apollo-server-lambda';
// import * as queries from './resolvers/queries';
// import typeDefs from './type-defs';
import * as mutations from './resolvers/mutations';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: mutations,
};

const NODE_ENV = process.env.NODE_ENV;

const IS_DEV = !NODE_ENV || !['production'].includes(NODE_ENV);

// const resolvers = {
//   Mutation: mutations,
//   Query: queries,
// } as IResolvers;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // subscriptions: {},
  introspection: IS_DEV,
  // context: {},
});

export default apolloServer.createHandler();

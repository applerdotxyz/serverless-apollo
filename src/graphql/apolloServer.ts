import { ApolloServer, IResolvers, gql } from 'apollo-server-lambda';
import queries from './resolvers/queries';
import typeDefs from './type-defs';
import mutations from './resolvers/mutations';
import { data } from "./resolvers/state/data";
const NODE_ENV = process.env.NODE_ENV;

const IS_DEV = !NODE_ENV || !['production'].includes(NODE_ENV);

const resolvers = {
  Mutation: mutations,
  Query: queries,
} as IResolvers;

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => { data },
  // subscriptions: {},
  introspection: IS_DEV,
  // context: {},
});

export default apolloServer.createHandler();

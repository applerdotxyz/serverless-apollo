import { gql } from 'apollo-server-lambda';

// Inputs
import DummyInput from './inputs/DummyInput';
// Objects
import DummyObject from './objects/DummyObject';
// Root types
import Mutation from './root/Mutation'; // tslint:disable-line ordered-imports
import Query from './root/Query'; // tslint:disable-line ordered-imports


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefsBooks = gql`
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



const typeDefStrings = [
  // Inputs
  DummyInput,
  // Objects
  DummyObject,
  // Root types
  Mutation,
  Query,
  
];

const typeDefs = typeDefStrings.map(typeDef => gql(typeDef));
typeDefs.concat([typeDefsBooks]);

export default typeDefs;
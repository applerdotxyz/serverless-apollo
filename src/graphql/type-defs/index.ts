import { gql } from 'apollo-server-lambda';

// Inputs
import DummyInput from './inputs/DummyInput';
import BookInput from './inputs/BookInput';
// Objects
import DummyObject from './objects/DummyObject';
import BookObject from './objects/BookObject';
// Root types
import Mutation from './root/Mutation'; // tslint:disable-line ordered-imports
import Query from './root/Query'; // tslint:disable-line ordered-imports

const typeDefStrings = [
  // Inputs
  DummyInput, BookInput,
  // Objects
  DummyObject, BookObject,
  // Root types
  Mutation,
  Query,
];

const typeDefs = typeDefStrings.map(typeDef => gql(typeDef));

export default typeDefs;

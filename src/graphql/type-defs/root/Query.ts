export default `
  type Query {
    dummyQuery(itemId: ID!): DummyObject!
    bookQuery(bookId: ID!): BookObject!
  }
`;

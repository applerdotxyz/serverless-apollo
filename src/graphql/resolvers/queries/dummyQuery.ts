import { IDummyObject, IDummyQueryArgs } from '../typings';

async function dummyQuery(
  _: any,
  args: IDummyQueryArgs,
): Promise<IDummyObject> {
  const { itemId } = args;

  console.log(`Query object with id ${itemId}`);

  return {
    firstItem: 'first',
    secondItem: 'second',
  };
}

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
export default { dummyQuery, books: () => books};

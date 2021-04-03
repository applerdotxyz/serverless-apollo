import { IDummyObject, IDummyQueryArgs } from '../typings';

export async function dummyQuery(
  _: any,
  args: IDummyQueryArgs,
): Promise<IDummyObject> {
  const { itemId } = args;

  console.log(`Query object with id ${itemId}`);

  // FIXME: add logic to query from database
  return {
    firstItem: 'first',
    secondItem: 'second',
  };
}

export default dummyQuery;

import { data } from "../state/data";
import { IBookObject, IBookQueryArgs } from "../typings";

export async function bookQuery(
  _: any,
  args: IBookQueryArgs,
): Promise<IBookObject> {
  console.log(data);
  
  const { bookId } = args;

  console.log(`Query object with id ${bookId}`);


  // FIXME: add logic to query from database
  return data?.books[bookId];
}

export default bookQuery;

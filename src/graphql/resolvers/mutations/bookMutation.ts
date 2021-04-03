import { IBookMutationArgs } from '../typings';
import { data } from "../state/data";
export async function bookMutation(
  _: any,
  args: IBookMutationArgs,
): Promise<boolean> {
  const { input: { title, author } } = args;

  console.log(`Mutation with inputs title=${title} and author=${author}`);

  data?.books.concat({ title, author });

  return true;
}


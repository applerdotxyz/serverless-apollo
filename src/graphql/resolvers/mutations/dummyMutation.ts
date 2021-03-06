import { IDummyMutationArgs } from '../typings';

export async function dummyMutation(
  _: any,
  args: IDummyMutationArgs,
): Promise<boolean> {
  const { input: { firstInput, secondInput } } = args;

  console.log(`Mutation with inputs firstInput=${firstInput} and secondInput=${secondInput}`);

  return true;
}

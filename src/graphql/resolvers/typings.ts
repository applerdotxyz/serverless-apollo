export interface IDummyObject {
  firstItem: string;
  secondItem: string;
}

export interface IDummyQueryArgs {
  itemId: string;
}

export interface IDummyMutationArgs {
  input: {
    firstInput: string;
    secondInput: string;
  };
}


export interface IBookObject {
  title: string;
  author: string;
}

export interface IBookQueryArgs {
  bookId: string;
}

export interface IBookMutationArgs {
  input: {
    title: string;
    author: string;
  };
}

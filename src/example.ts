function concat(first: string, second: string): string {
  return first + second;
}

concat('Hello ', 'World');

interface HomeTask {
  howIDoIt: string;
  simeArray: Array<number | string>;
  withData?: HomeTask[];
}

const myHometask: HomeTask = {
  howIDoIt: 'I Do It Wel',
  simeArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', simeArray: ['string one', 23] }],
};

interface MyArray<T> {
  [n: number]: T;

  map<U>(fn: (el: T) => U): U[];

  reduce<U>(fn: (acc: U, cur: T, index: number) => U): U[];
}

const tsArr: Array<number> = [1, 3];
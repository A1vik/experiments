const isLoading: boolean = false;

const int: number = 2;
const float: number = 4.20;
const num: number = 3e10;

const message: string = 'Hello TS';

const numberArray: number[] = [1, 2, 3, 4, 5];
const numberArrayGeneric: Array<number> = [1, 2, 3, 4, 5];

const words: string[] = ['hello', 'ts'];

const contact: [string, number] = ['alex', 1223];

let variable: any = 42;
// ...
variable = 'string';

//

function sayMyName(name: string): void {
  console.log(name);
}

sayMyName('alex');

// Type
type Login = string;
const login: Login = 'user';
// const pass: Login = 123; => err

type ID = string | number;
const id1: ID = 1243;
const id2: ID = 'asd';
// const id3: ID = true; => err 2200 7702 4062 3704
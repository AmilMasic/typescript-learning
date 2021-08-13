const a = '1';
console.log("aaa", a);

let hello: string = "world";

const getFullName = (name: string, surname: string): string => {
  return name + " " + surname;
};
console.log(getFullName("amil", "masic"));

// interface usage and setups
// using ? makes a property non mandatory
// ? has to be before the :
// interface UserInterface {
//   name: string;
//   age?: number;
//   getMessage(): string;
// }
//
// const user: UserInterface = {
//   name: "Amil",
//   age: 30,
//   getMessage(){
//     return "Hello" + name;
//   }
// }
//
// const user2: UserInterface = {
//   name: "Jack",
//   getMessage(){
//     return "Hello" + name;
//   }
// };
//
// console.log(user.getMessage());

// types and unions
type ID = string;
type PopularTag = string;
type MaybePopularTag = PopularTag | null

interface newUserInterface {
  // we can declare custom types and use them everywhere in the file
  id: ID;
  name: string;
  surname: string;
}


const PopularTags: PopularTag[] = ['dragon', 'coffee'];

const dragonsTag: MaybePopularTag = "dragon";
let username: string = "alex";
// using a pipe to use it for data that can be either
let pageName: string | number = "1";
// using default values
let errorMessage: string | null = null;
// you can make unions with interfaces too
let newUser: newUserInterface | null = null;

// data types in TypeScript
// void - is just null or undefined
const doSomething = (): void => {
  console.log("doSomething");
}
// any - worst type in TypeScript
// any is no solution, just a beginning of bigger problems
let vAny: any = 10;
// we can change this to anything we want.

// never - gets never executed

// unkown - introduced in TS3
let vUnknown: unknown = 10;
// the following code throws an error because of unknown doesn't allow this, if it was any it would have not thrown an error
// uncomment the following line to see the error message
// let s2: string = vUnknown;

// the following code is super intersting
// converting string to numbers with unknown
let pageNumber: string = "1";

// typescript knows what document is, and querySelector is a method
// it only sees the datatype, not the markup

// const someElement = document.querySelector(".foo") as HTMLInputElement;
//
// console.log("someElement", someElement.value);
//
// someElement.addEventListener('blur', (event) => {
//   const target = event.target as HTMLInputElement;
//   console.log("event", target.value);
// });

// classes in TS
interface UserInterface {
  getFullName(): string;
}
class User implements UserInterface {
  // using private so it doesn't show when looking for properties
  // protected - to protect it from change
  // readonly to make constants that are unchangable
  private firstName: string
  private lastName: string
  static readonly maxAge = 50;

  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return this.firstName + ' ' + this.lastName
  }
}

const amil = new User("Amil", "Masic");
console.log(amil.getFullName());

class Admin extends User {
  private editor: string

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor
  }
}

const admin = new Admin('foo', 'bar');

// generics interfaces and functions
// <T> is generic type


const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16)
  return {
    ...obj,
    id
  }
}

const user3 = {
  name: "Jack",
};

const result = addId(user3);

console.log("result", result);

// using genericsUserInterface
interface GenericsUserInterface<T> {
  name :string;
  data: T;
}

const user4: GenericsUserInterface<{meta: string}> = {
  name: "notJack",
  data: {
    meta: "foo",
  },
};

const user5: GenericsUserInterface<string[]> = {
  name: "John",
  data: ["foo", "bar", "baz"],
};

// enums in TS
// const statuses = {
//   notStarted = 0,
//   inProgress = 1,
//   done = 2,
// };
//
// console.log(statuses.inProgress)

enum StatusEnum {
  NotStarted = 'notStarted',
  InProgress = 'inProgress',
  Done = 'done',
};

// you can use enums in interfaces
interface Task {
  id: string;
  status: StatusEnum;
};
// enums can be used as a type
let notStartedStatus: StatusEnum = StatusEnum.NotStarted;
console.log(StatusEnum.InProgress);

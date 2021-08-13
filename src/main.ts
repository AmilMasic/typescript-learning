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
interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: UserInterface = {
  name: "Amil",
  age: 30,
  getMessage(){
    return "Hello" + name;
  }
}

const user2: UserInterface = {
  name: "Jack",
  getMessage(){
    return "Hello" + name;
  }
};

console.log(user.getMessage());

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

const someElement = document.querySelector(".foo") as HTMLInputElement;

console.log("someElement", someElement.value);

someElement.addEventListener('blur', (event) => {
  const target = event.target as HTMLInputElement;
  console.log("event", target.value);
});

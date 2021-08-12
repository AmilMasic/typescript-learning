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

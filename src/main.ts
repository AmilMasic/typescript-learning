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

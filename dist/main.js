var a = '1';
console.log("aaa", a);
var hello = "world";
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("amil", "masic"));
var user = {
    name: "Amil",
    age: 30,
    getMessage: function () {
        return "Hello" + name;
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(user.getMessage());
var PopularTags = ['dragon', 'coffee'];
var dragonsTag = "dragon";
var username = "alex";
// using a pipe to use it for data that can be either
var pageName = "1";
// using default values
var errorMessage = null;
// you can make unions with interfaces too
var newUser = null;
// data types in TypeScript
// void - is just null or undefined
var doSomething = function () {
    console.log("doSomething");
};
// any - worst type in TypeScript
// any is no solution, just a beginning of bigger problems
var vAny = 10;
// we can change this to anything we want.
// never - gets never executed
// unkown - introduced in TS3
var vUnknown = 10;
// the following code throws an error because of unknown doesn't allow this, if it was any it would have not thrown an error
// uncomment the following line to see the error message
// let s2: string = vUnknown;
// the following code is super intersting
// converting string to numbers with unknown
var pageNumber = "1";
var numericPageNumber = pageNumber;

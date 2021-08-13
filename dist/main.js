var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = '1';
console.log("aaa", a);
var hello = "world";
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("amil", "masic"));
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
// typescript knows what document is, and querySelector is a method
// it only sees the datatype, not the markup
var someElement = document.querySelector(".foo");
console.log("someElement", someElement.value);
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log("event", target.value);
});
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    User.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.maxAge = 50;
    return User;
}());
var amil = new User("Amil", "Masic");
console.log(amil.getFullName());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var admin = new Admin('foo', 'bar');

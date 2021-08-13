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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// generics interfaces and functions
// <T> is generic type
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user3 = {
    name: "Jack"
};
var result = addId(user3);
console.log("result", result);
var user4 = {
    name: "notJack",
    data: {
        meta: "foo"
    }
};
var user5 = {
    name: "John",
    data: ["foo", "bar", "baz"]
};
// enums in TS
// const statuses = {
//   notStarted = 0,
//   inProgress = 1,
//   done = 2,
// };
//
// console.log(statuses.inProgress)
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notStarted";
    StatusEnum["InProgress"] = "inProgress";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
;
;
// enums can be used as a type
var notStartedStatus = StatusEnum.NotStarted;
console.log(StatusEnum.InProgress);

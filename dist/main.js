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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hehehe" -> gives error because if you check in line number 1, it returns a number! 
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; //default argument
addTwo(5);
getUpper('Hello');
signUpUser("Hello", "abc@gmail.com", false);
loginUser("hhh", "abcd@gmail.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 ok!";
}
var getHello = function (s) {
    return "Hello";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}

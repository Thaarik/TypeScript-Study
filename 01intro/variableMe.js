"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Dave";
// greetings = true // does not allow you to do that because we gave greetings type as string
// greetings = 6 // does not allow you to do that because we gave greetings type as string
greetings.toLowerCase();
console.log(greetings);
//number
// let userId: number = 334455.33 ->kinda overused. You can do it like the below
var userId = 334455.3;
userId.toFixed();
// userId = 8989 //correct because its a number
// userId = "Dave" //error because userId is number given through toFixed method().
//boolean
var isLoggedIn = false;
// any
var hero; //avoid using any
function getHero() {
    return "thor";
}
hero = getHero();

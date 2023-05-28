"use strict";
const score = [];
const names = [];
function indentityOne(val) {
    return val;
}
function indentityTwo(val) {
    return val;
}
function indentityThree(val) {
    return val;
}
function indentityFour(val) {
    return val;
}
// indentityFour<Bottle>({})
indentityTwo("3"); //function identityTwo(val: any):any
indentityThree("3"); //function indentityThree<"3">(val: "3"):"3". It locks the value/type. 
indentityThree(3); //function indentityThree<3>(val: 3):3. It locks the value/type. 
function getSearchProducts(products) {
    //do some db operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    //do some DB operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
class Sellabled {
    constructor() {
        this.cart = []; //initialization
    }
    addToCart(products) {
        this.cart.push(products);
    }
}

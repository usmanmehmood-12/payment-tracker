"use strict";
let character = 'mario';
let age = 30;
let isBlackBelt = false;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(7.5));
let ninja = {
    name: 'usman',
    belt: 'black',
    age: 27
};
/**Cannot add new properties to objs like this in ts */
//ninja.city='rwp'
/**Explicit Types */
let Hero;
let heroAge;
let loggedIn;
Hero = "Usman";
heroAge = 27;
loggedIn = true;
/**Arrays */
let myHero = []; //initialize with empty array to use push method
myHero.push('Thor');
/** Union Type (arrays/variables having different type stuff inside) */
let mixed = []; // array of three types
mixed.push('hello');
mixed.push(1);
console.log('mixed array: ', mixed);
let uid;
uid = 'my id';
uid = 1;
/** Objects */
let ninjaOne;
ninjaOne = { name: 'mario', age: 20 };
let ninjaTwo;
/** any */
let myName;
myName = "Usman";
myName = 12;
myName = {
    name: 'usman',
    age: 10
};
let anyArray = [];
anyArray.push('mario');
anyArray.push(1);
anyArray.push(true);
let anyObj;
/** FUnctions */
let myFunc;
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 5);
const minus = (a, b) => {
    return a - b;
};
let result = minus(5, 2);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
/** Function Signatures */
//eg 1
let greetMe;
greetMe = (name, greetings) => {
    console.log(`${name} says ${greetings}`);
};
//eg 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//eg 3
let logDetail;
logDetail = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};

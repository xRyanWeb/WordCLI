"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Nums_1 = require("../Nums/Nums");
var getFirstNames = function () {
    var stringArray = [];
    stringArray.push("James");
    stringArray.push("Joey");
    stringArray.push("John");
    stringArray.push("Peterson");
    randomFirstName(stringArray);
};
// const num2 =
var num1 = (0, Nums_1.Numbers)(1, 10);
var num2 = (0, Nums_1.Numbers)(5, 10);
var getLastNames = function () {
    var stringArray = [];
    stringArray.push("Perty");
    stringArray.push("Luker");
    stringArray.push("Owns");
    stringArray.push("Jonston");
    return randomLastName(stringArray);
};
var randomFirstName = function (names) {
    var randomNameFirst = Math.floor(Math.random() * names.length);
    var randomName = names[randomNameFirst];
    var lastName = getLastNames();
    console.log("Name: ".concat(randomName, " Last Name: ").concat(lastName, " "));
};
var randomLastName = function (names) {
    var randomNameLastFirst = Math.floor(Math.random() * names.length);
    var randomName = names[randomNameLastFirst];
    return randomName;
};
getFirstNames();

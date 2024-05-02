"use strict";

// input vakjes koppelen aan variabelen
// document = het html bestand waaraan het script
// gekoppeld werd
let number1Input = document.getElementById("number1");
let number2Input = document.getElementById("number2");

// resultaat vakje koppelen
let resultOutput = document.getElementById("result");

// buttons koppelen
let addButton = document.getElementById("add-button");
let subtractButton = document.getElementById("subtract-button");
let multiplyButton = document.getElementById("multiply-button");
let divideButton = document.getElementById("divide-button");

// variabelen maken voor opslag cijfers
let number1 = 0;
let number2 = 0;
let result = 0;

// click event toevoegen aan optel knop addButton
addButton.addEventListener("click", function(){
    ReadNumbers();
    result = Calculate(number1, number2, "+");
    resultOutput.value = parseFloat(result.toFixed(2));
})

subtractButton.addEventListener("click", function(){
    ReadNumbers();
    result = Calculate(number1, number2, "-");
    resultOutput.value = parseFloat(result.toFixed(2));
})

multiplyButton.addEventListener("click", function(){
    ReadNumbers();
    result = Calculate(number1, number2, "x");
    resultOutput.value = parseFloat(result.toFixed(2));
})

divideButton.addEventListener("click", function(){
    ReadNumbers();
    result = Calculate(number1, number2, ":");
    resultOutput.value = parseFloat(result.toFixed(2));
})

// function die de cijfers inleest
function ReadNumbers(){
    number1 = parseFloat(number1Input.value);
    number2 = parseFloat(number2Input.value);
}

// function die een berekening uitvoert op basis
// van de ingevoerde parameters bij de function
// aanroepen is dan bvb: 
// Calculate(number1, number2, "+")
function Calculate(number1, number2, operator){
    if (operator == "+") {
        return number1 + number2;
    }
    if (operator == "-") {
        return number1 - number2;
    }
    if (operator == "x") {
        return number1 * number2;
    }
    if (operator == ":") {
        return number1 / number2;
    }
}
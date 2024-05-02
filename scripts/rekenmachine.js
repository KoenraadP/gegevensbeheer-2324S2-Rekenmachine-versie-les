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

// buttons samen in een array steken
let buttons = [addButton, subtractButton, multiplyButton, divideButton];

// variabelen maken voor opslag cijfers
let number1 = 0;
let number2 = 0;
let result = 0;

// loop (foreach) gebruiken om click function
// aan alle vier de knoppen toe te voegen
buttons.forEach(button => {
    button.addEventListener("click", function(e){
        ClickButton(e.target.innerText);
    })
});

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

// universele click function voor de buttons
function ClickButton(buttonText) {
    ReadNumbers();
    // validatie op cijfers
    // isNaN --> controleert of iets wel degelijk een cijfer is
    // !isNaN() --> met uitroepteken: gaat door als het effectief
    // WEL een cijfer is
    if (!isNaN(number1) && !isNaN(number2)) {
        result = Calculate(number1, number2, buttonText);
        resultOutput.value = parseFloat(result.toFixed(2));
    }
    else {
        alert("Geen geldige cijfers ingevuld!");
    }
}
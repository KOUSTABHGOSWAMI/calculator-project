//getting the display bar and all the buttons
var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");
var operand1 = 0;
var operand2 = null;
var operator = null;

//adding eventlistener on click
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var value = this.getAttribute('data-value');
//setting operator for every buton clicks
        if (value == 'AC') {
            display.innerText = null;
        } else if (value == '+' || value == '-' || value == "*" || value == "/" || value == "%") {

            operator = value;
            operand1 = parseFloat(display.innerText);
            display.innerText = null;
        } else if (value == '=') {
            if (operand1 != null && operator != null) {
                operand2 = parseFloat(display.innerText);
                display.innerText = eval(operand1 + " " + operator + " " + operand2);
            } else {
                display.innerText = "Error";
            }
        } else if (value == '.') {
            display.innerText += value;

        } else if (value == 'plusmin') {
            display.innerText = eval(parseFloat(display.innerText) * (-1));
        } else {
            display.innerText += value;
        }

    });
}

//handling keyboard events
document.addEventListener("keypress", function(event) {
    var key;
    //getting the key 
    key = event.keyCode;
    value = String.fromCharCode(key);
    console.log(key + " " + value);
    var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


    if (value == '+' || value == '-' || value == "*" || value == "/" || value == "%") {

        operator = value;
        operand1 = parseFloat(display.innerText);
        display.innerText = null;
    } else if (key == '13') {  //13 is the keycode for Enter
        if (operator != null) {
            operand2 = parseFloat(display.innerText);
            display.innerText = eval(operand1 + " " + operator + " " + operand2);
        } else {
            display.innerText = "Error";
        }
    } else if (value == '.') {
        if (display.innerText.length && !display.innerText.includes('.')) {
            display.innerText += value;
        }
    } else if (value in numArray) {
        display.innerText += value;
    }
})
document.addEventListener("keydown", function(event) {
    var key;
    key = event.keyCode;

    if (key == '8') {   //8 is the key code for backspace
        display.innerText = null;
    }
});

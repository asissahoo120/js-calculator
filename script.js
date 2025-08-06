const display = document.querySelector("#display");

let displayString = "";

function appendToDisplay(input) {
    displayString += input;

    let formatedString = displayString
    formatedString = formatedString.replaceAll("/100*", "%");
    formatedString = formatedString.replaceAll("/", "÷");
    formatedString = formatedString.replaceAll("*", "×");
    display.value = formatedString;
      display.scrollLeft = display.scrollWidth;
}

function calculate() {
    if(!displayString){
        return
    }

    try {
        displayString = eval(displayString).toString();
        display.value = displayString;
    } catch (error) {
        display.value = "Error!";
        displayString = ""
    }

}

function clearDisplay() {
    displayString = "";
    display.value = displayString;
}

function cut() {
    displayString = displayString.slice(0, -1);
    display.value = display.value.slice(0, -1);
}


function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("res").value = num1 + num2;
}

function subtract() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("res").value = num1 - num2;
}

function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    document.getElementById("res").value = num1 * num2;
}

function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        alert("Division by zero is not allowed!");
        document.getElementById("res").value = "";
    } else {
        document.getElementById("res").value = num1 / num2;
    }
}

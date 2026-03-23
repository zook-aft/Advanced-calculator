let currentExpression = "";
const expressionDisplay = document.getElementById('expression');
const resultDisplay = document.getElementById('result');

function input(value) {
    currentExpression += value;
    updateDisplay();
}

function clearAll() {
    currentExpression = "";
    resultDisplay.innerText = "READY";
    updateDisplay();
}

function backspace() {
    currentExpression = currentExpression.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    expressionDisplay.innerText = currentExpression || "0";
    try {
        if (currentExpression) {
            let preview = math.evaluate(currentExpression);
            resultDisplay.innerText = "= " + preview;
        }
    } catch (e) {}
}

function calculate() {
    try {
        let result = math.evaluate(currentExpression);
        expressionDisplay.innerText = result;
        resultDisplay.innerText = "COMPLETE";
        currentExpression = result.toString();
    } catch (error) {
        resultDisplay.innerText = "ERROR";
    }
}

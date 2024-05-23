// script.js

let currentResult = ''; 

function appendToResult(value) {
    if (currentResult.length < 15) { 
        currentResult += value;
        document.getElementById('result').value = currentResult;
    }
}

function clearResult() {
    currentResult = '';
    document.getElementById('result').value = currentResult;
}

function calculate() {
    let result;
    try {
        result = eval(currentResult);
    } catch (error) {
        result = 'Error';
    }
    document.getElementById('result').value = result;
}

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
function getUserInput(){
    return parseInt(userInput.value);
}

function createAndWriteLog(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationID, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationID,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
        };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add(){
    const enteredNum = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNum;
    createAndWriteLog('+', initialResult, enteredNum);
    writeToLog('ADD', initialResult, enteredNum, currentResult);
}

function subtract(){
    const enteredNum = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNum;
    createAndWriteLog('-', initialResult, enteredNum);
    writeToLog('SUBTRACT', initialResult, enteredNum, currentResult);
}

function multiply(){
    const enteredNum = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNum;
    createAndWriteLog('*', initialResult, enteredNum);
    writeToLog('MULTIPLY', initialResult, enteredNum, currentResult);
}

function divide(){
    const enteredNum = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNum;
    createAndWriteLog('/', initialResult, enteredNum);
    writeToLog('DIVIDE', initialResult, enteredNum, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
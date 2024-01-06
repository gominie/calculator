//want to display result of operation on top!

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  numb = a / b;
  return +numb.toFixed(4)
}

function multiply(a, b) {
  numb = a * b;
  return +numb.toFixed(4)
}


function factorial(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
}

function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}

//add code that makes 0 the first number if operator is pressed first

//screen display function
let screen = document.getElementById("screen");
let numbers = document.querySelectorAll(".number");
let equals = document.getElementById("equals");
let decimal = document.getElementById("decimal");
let clear = document.getElementById("clear");
let erase = document.getElementById("delete");
let operator = document.querySelectorAll(".operator");
let dynamicScreen = document.getElementById("calculation");
let resultScreen = document.getElementById("result");
let dynamicValue = "0";
let firstNum = "";
let secondNum = "";
let result = "";
let operatorSelected = false;
let resultGiven = false;

//decimal.addEventListener("click", function () {

//})

numbers.forEach((number) =>
  number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
  })
);

function handleNumber(num) {
  if (resultGiven) {
    dynamicValue = result;
    firstNum = result;
    
    resultGiven = false;
  } else if (num === "." && dynamicValue === "0") {
    dynamicValue = "0.";
  } else if (dynamicValue.indexOf(".") !== -1 && num === ".") {
    return;
  } else if (!operatorSelected && dynamicValue === "0") {
    dynamicValue = num;
  } else if (dynamicValue.length <= 5) {
    dynamicValue += num;
  }
  dynamicScreen.innerHTML = dynamicValue;

  if (!operatorSelected) {
    firstNum = dynamicValue;
  } else {
    secondNum += num;
    dynamicScreen.innerHTML = firstNum + " " + operator + " " + secondNum;
  }
}

operator.forEach((op) =>
  op.addEventListener("click", function (e) {
    handleOperator(e.target.textContent);
  })
);

function handleOperator(op) {
  operator = op;
  operatorSelected = true;
  firstNum = dynamicValue;
  dynamicValue = "";
  dynamicScreen.innerHTML = firstNum + " " + operator;
}

//erases screen
clear.addEventListener("click", function () {
  dynamicValue = "0";
  firstNum = "";
  secondNum = "";
  result = "";
  operator = "";
  operatorSelected = false;
  dynamicScreen.innerHTML = dynamicValue;
  resultScreen.innerHTML = result;
});

//delete by char
erase.addEventListener("click", function () {
  handleErase();
  dynamicScreen.innerHTML = dynamicValue;
});

function handleErase() {
  if (resultGiven) {
    result = "";
    resultScreen.innerHTML = result;
    resultGiven = false;
  } else if (secondNum.length > 0) {
    secondNum = secondNum.slice(0, -1);
    dynamicValue = firstNum + " " + operator + " " + secondNum;
  } else if (operator.length > 0) {
    operator = "";
    dynamicValue = firstNum;
  } else if (firstNum.length > 0) {
    firstNum = firstNum.slice(0, -1);
    dynamicValue = firstNum || "0";
  } else {
    dynamicValue = "0";
  }
}

equals.addEventListener("click", function () {
  handleEquals();
  resultScreen.innerHTML = result;
});

function handleEquals() {
  if (operatorSelected && secondNum !== "") {
    result = operate(firstNum, operator, secondNum);
    resultGiven = true;
    operatorSelected = false;
    operator = "";
    secondNum = "";
    dynamicValue = result;
    firstNum = result;
  }
}

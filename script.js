function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(array) {
  return array.reduce((total, current) => total + current, 0);
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function multiplyarr(array) {
  return array.reduce((product, current) => product * current);
}

function power(a, b) {
  return Math.pow(a, b);
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
let x = document.getElementById("delete");
let operator = document.querySelectorAll(".operator");

let dynamicValue = "0";
let firstNum = "";
let secondNum = "";
let result = ""
let operatorSelected = false;
let dynamicScreen = document.getElementById("previous");

numbers.forEach((number) =>
  number.addEventListener("click", function (e) {
    handleNumber(e.target.textContent);
  })
);

function handleNumber(num) {
  /*dynamicValue = num;
  dynamicScreen.innerHTML = dynamicValue; */
  if (!operatorSelected && dynamicValue === "0") {
    dynamicValue = num
  } else if (dynamicValue.length <= 5) {
    dynamicValue += num;
  }
  dynamicScreen.innerHTML = dynamicValue

if (!operatorSelected) {
  firstNum = dynamicValue;
} else {
  secondNum = dynamicValue;
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
  operatorSelected = false
  dynamicScreen.innerHTML = dynamicValue;
});

//delete by char
erase.addEventListener("click", function () {
  handleErase();
  dynamicScreen.innerHTML = dynamicValue;
}); 

function handleErase() {
   if (secondNum.length > 0) {
    secondNum = secondNum.slice(0,-1);
   dynamicValue = firstNum + " " + operator + " " + secondNum
   } else if (operator.length > 0) {
    operator = "";
    dynamicValue = firstNum;
   } else if (firstNum.length > 0) {
    firstNum = firstNum.slice(0,-1);
    dynamicValue = firstNum || "0"
   }
  }


 equals.addEventListener("click", function () {
  handleEquals();
  dynamicScreen.innerHTML = result;
}); 


function handleEquals() {
  result = operate(firstNum, operator, secondNum);
  operator = "";
  secondNum = "";
  firstNum = "";
  dynamicValue = "";
}

//function calculate(){
//previousValue = Number(previousValue);
//dynamicValue = Number(dynamicValue)}

//add event istener that does a function only when previous has number operator and current has a number. calculate
//op after pressing equals sign and display it to current screen

/* function extractOperation() {
let regex = /(\d+|[+-×÷])/g
let operation = displayValue.match(regex);
console.log(operation)
} */

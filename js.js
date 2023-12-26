 function add (a, b) {
    return a + b;
  };
  
   function subtract (a, b) {
    return a - b;
  };
  
   function sum (array) {
    return array.reduce((total, current) => total + current, 0);
  };
  
  function divide (a,b) {
    return a / b;
  };

   function multiply (array) {
    return array.reduce((product, current) => product * current)
  };
  
   function power (a, b) {
    return Math.pow(a, b);
};
  
   function factorial (n) {
    if (n === 0) return 1;
    let product = 1;
    for (let i = n; i > 0; i--) {
      product *= i;
    }
    return product;
  };
  
  function operate (a, operator, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a,b)
        case '-':
            return subtract(a,b)
        case 'x':
            return multiply(a,b)
        case '/':
            if (b === 0) return null
            else return divide(a,b)
            default: 
            return null
    }
  }
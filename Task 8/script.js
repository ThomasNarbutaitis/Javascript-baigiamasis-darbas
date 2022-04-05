/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
substraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator() {
  this.sum = function (num1, num2) {
    return num1 + num2;
  };
  this.substraction = function (num1, num2) {
    return num1 - num2;
  };
  this.multiplication = function (num1, num2) {
    return num1 * num2;
  };
  this.division = function (num1, num2) {
    return num1 / num2;
  };
}

//f-jos testavimas

// const anyTwoNumbers = new Calculator();

// const checkSum = anyTwoNumbers.sum(9, 3);
// const checkSubstraction = anyTwoNumbers.substraction(-4, 3);
// const checkMultiplication = anyTwoNumbers.multiplication(5, 6);
// const checkDivision = anyTwoNumbers.division(48, 3);

// console.log("checkSum ===", checkSum);
// console.log("checkSubstraction ===", checkSubstraction);
// console.log("checkMultiplication ===", checkMultiplication);
// console.log("checkDivision ===", checkDivision);

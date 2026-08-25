"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  
  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    return [root];
  } else {
    let rootFirst = (-b + Math.sqrt(discriminant)) / (2 * a);
    let rootSecond = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [rootFirst, rootSecond];
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent / 100 / 12;
  let loanAmount = amount - contribution;
  let paymentMonth = loanAmount * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) -1 )));
  let totalPayments = Math.round(paymentMonth * countMonths * 100) / 100;

  return totalPayments;
}
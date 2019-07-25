/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function(ceiling) {
  // do work here

  // Find the greatest common divisor
  function GCD(num1, num2) {
    if (num2 === 0) {
      return num1;
    } else {
      let remainder = num1 % num2;
      return GCD(num2, remainder);
    }
  }

  // Find the Least Common Multiple
  function LCM(num1, num2) {
    let num3 = GCD(num1, num2);
    return (num1 * num2) / num3;
  }

  // Starting at 1, find the LCM of 1 & 2 (which is 2) and then find the LCM with 3. Keep going until ceiling is reached.
  let a = 1;

  for (i = 2; i < ceiling; i++) {
    let b = LCM(a, i);
    a = b;
  }

  return a;
};

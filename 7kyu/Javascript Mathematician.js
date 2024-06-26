/*DESCRIPTION:

You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

The function should contain at least 1 argument per set.

calculate(1)(1) // should return 2
calculate(1,1)(1) // should return 3
calculate(1,1)(1,-1) // should return 2
calculate(2,4)(3,7,1) // should return 17
*/

function calculate(...args1) {
  return function(...args2){
    return [...args1, ...args2].reduce((sum, current) => sum + current, 0,)
  }
}

function calculate(...args1) {
  return function(...args2){
    return (args1).concat(args2).reduce((sum, current) => sum + current, 0,)
  }
}
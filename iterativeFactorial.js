//iterative factorial solution
var factorial = function(n){
  var result = 1;
  for(var i = 1; i <= n; i++){
    result*=i;
  }
  return result;
};

console.log("The value of 5! should be "+5*4*3*2*1);
console.log(factorial(6));
console.log(factorial(4));
console.log("The value of 5! is "+ factorial(5));
console.log("The value of 0! should be 1");
console.log("The value of 0! is "+ factorial(0));
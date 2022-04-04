//recursive factorial

var factorial = function(n){
  if (n==0){
    return 1;
  }else{
    return n * factorial(n-1);
  }
};

console.log("The value of 0! is "+ factorial(0)+".");

console.log("The value of 5! is "+ factorial(5)+".");
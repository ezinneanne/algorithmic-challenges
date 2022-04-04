var isEven = function(n){
  return n%2 === 0;
};

var isOdd = function(n){
  return !isEven(n);
};

var power = function(x,n){
  console.log("Computing "+ x + " raised to power "+ n + ".");
  //base case
  if (n===0 && x^0 === 1){
    return 1^n;
  }
  //recursive case: n is negative
  if (n < 0){
    return 1 / (power(x, -1*n));
  }
  //recursive case: n is odd
  if (isOdd(n)){
    return (power(x,n-1)*x);
  }
  //recursive case: n is even
  if (isEven(n)) {
    var abc = power(x,n/2);
    return (abc*abc);
  }
};

var displayPower = function(x,n){
  console.log(x + " to the "+ n + " is "+ power(x,n));
};

displayPower(2,3);

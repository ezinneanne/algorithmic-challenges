//recursive algorithm challenge (is string a palindrome)
var firstCharacter = function(str){
  return str.slice(0,1);
};

//Returns the last character of a string str
var lastCharacter = function(str){
  return str.slice(-1);
};

//Returns the string that results from removing the first
//and last characters from str
var middleCharacter = function(str){
  return str.slice(1,-1);
};

var isPalindrome = function(str){
  //base case #1
  if (str.length <= 1){
    return true;
  }
  //base case #2
  if (firstCharacter(str) !== lastCharacter(str)){
    return false;
  }
  //recursive case
  if (firstCharacter(str) === lastCharacter(str)) {
    middleCharacter(str);
    if (str.length <= 1){
      return true;
    }
    else{
      return isPalindrome(middleCharacter(str)) ;
    }
  }
};

var checkPalindrome = function(str){
  console.log("Is this word a palindrome? "+str);
  console.log(isPalindrome(str));
};

checkPalindrome("motomotom")
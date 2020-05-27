// add
function add(a, b) {
    return a+b;
  
}

console.log(add(4, 2)); 

// 2. Multiply


//   exponent
var exponent = function(a, b) 
{
   if (b === 0) 
   {
    return 1;
    }
  else 
  {
    return a * exponent(a, b-1);
  }
};

console.log(exponent(6, 4));

  
// factorial
  function factorial(b) 
{ 

  if (b === 0)
 {
    return 1;
 }
  return b * factorial(b-1);
         
}
console.log(factorial(5));





// fibonacci

var fibonacci_series = function (b) 
{
  if (b===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(b - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));
 
// Defining the fnction that receives the callback
function receivesAFunction(callback) {
    callback();
  }
  
  // returns the named function
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("This is a named function.");
    };
  }
  
  // returns anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  
  module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };
  
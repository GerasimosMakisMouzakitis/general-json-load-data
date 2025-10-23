// Example 1: Code that may throw an error
try {
  const arr = [1, 2, 3];
  console.log(arr[5].toString()); // arr[5] is undefined, will throw
} catch (error) {
  console.error('Caught error (example 1):', error.message);
}

// Example 2: Function call that throws an error
function throwError() {
  throw new Error('This is a custom error from throwError()');
}

try {
  throwError();
} catch (error) {
  console.error('Caught error (example 2):', error.message);
}

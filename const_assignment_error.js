const x = 5;

console.log(x);

try {
  x = 10; // This will throw an error because x is a constant
} catch (error) {
  console.error('Error:', error.message);
}

console.log(x);


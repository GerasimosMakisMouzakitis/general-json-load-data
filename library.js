// library.js
// Do not remove the comments

// Export multiple functions from a module

// Naming Conventions:
// fullName (camelCase recommended for functions and variables)
// FullName (usually used for class names)

// Template literals `$(variable1) $(variable2)`
// Readability and Flexibility

export function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

export function greet(firstName) {
    return `Hello, ${firstName}!`;
}

export function logName(fullName) {
    console.log(fullName);
}

export function kydRate(){
    return 170/225;
}

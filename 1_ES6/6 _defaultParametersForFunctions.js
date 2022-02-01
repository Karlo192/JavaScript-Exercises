const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting(undefined));
console.log(greeting());


// Only change code below this line
const increment = (number, value = 1) => number + value;
console.log(increment(5));
console.log(increment(5, 2));
// Only change code above this line
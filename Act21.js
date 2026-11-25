// Requirement 2: Const variable 1
const factor = 3;
// Requirement 2: Const variable 2 & Requirement 3: Array
const list = [10, 20, 30];

// Requirement 1: Arrow function 1
const multiply = (n) => n * factor;
// Requirement 1: Arrow function 2 & Requirement 4: Template literal 1
const format = (n) => `Result: ${n}`;
// Requirement 1: Arrow function 3
const print = (msg) => console.log(msg);

const val1 = multiply(list[0]);
const val2 = multiply(list[1]);

// Requirement 4: Template literal 2
print(`${format(val1)}`);
print(format(val2));
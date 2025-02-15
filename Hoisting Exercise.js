/* Task 1: Declare a Destination Variable */
let destination = "Ancient Egypt"; // Declaring a variable using `let`
console.log(destination); // Output: Ancient Egypt

/* Task 2: Change the Destination */
destination = "Medieval Europe"; // Changing the value of `destination`
console.log(destination); // Output: Medieval Europe

/* Task 3: Declare a Constant Travel Date */
const travelDate = "2024-03-15"; // Declaring a constant
console.log(travelDate); // Output: 2024-03-15

// Attempting to change a `const` variable will cause an error:
// travelDate = "2025-06-20"; // This will throw an error: TypeError: Assignment to constant variable.

/*
 * Observations:
 * Constants (`const`) cannot be reassigned after they are initialized.
 * Trying to reassign `travelDate` will cause a TypeError.
 */

/* Task 4: Experiment with Variable Hoisting */
console.log(timeMachineModel); // Output: undefined (Hoisting applies to `var`, but not its value)
var timeMachineModel = "T-800"; // Declaring and assigning a value
console.log(timeMachineModel); // Output: T-800

/*
 * Observations:
 * Variables declared with `var` are hoisted, meaning their declarations are moved to the top of their scope.
 * However, only the declaration is hoisted, not the assignment.
 * Before the assignment, `timeMachineModel` exists but is `undefined`.
 */
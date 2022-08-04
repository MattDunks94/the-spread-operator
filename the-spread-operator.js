/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4)

// Copying an array
let arr3 = [4,5,6]
// The '...' allows us to edit arr4 without modifying arr3.
let arr4 = [...arr3]
arr4.push(7)

// Copying an object
let obj1 = {a:1, b:2, c:3};
// The '...' allows us to edit obj2 without modifying obj1.
// Also added new element to obj2 but not to obj1.
let obj2 = {...obj1, d:4};
// Overiding an element from obj1 assigning it to obj3.
let obj3 = {...obj1, b:5};

// Copying only part of an array/object
let arr5  = [...arr1, {...obj1}, ...arr3, 'x', 'y', 'z'];
console.log(arr5)

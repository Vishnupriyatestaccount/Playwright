// // JavaScript variable declarations examples

// // 1. var: function-scoped, can be re-declared and updated
// var name = 'Alice';
// console.log('var initial:', name);

// var name = 'Bob';
// console.log('var redeclared:', name);

// name = 'Charlie';
// console.log('var updated:', name);
// /*
// 2. let: block-scoped, can be updated but not re-declared in the same scope
let age = 30;
console.log('let initial:', age);

age = 31;
console.log('let updated:', age);

// Uncommenting the next line will throw an error because 'let' cannot be re-declared in the same scope
// let age = 32;

{
  let age = 40; // new block-scoped variable
  console.log('let in block:', age);
}

console.log('let after block:', age);

// // 3. const: block-scoped, cannot be updated or re-declared
// const country = 'USA';
// console.log('const initial:', country);

// // Uncommenting the next line will throw an error because 'const' cannot be reassigned
// // country = 'Canada';

// // const also works for objects, but the reference cannot be changed
// const user = { id: 1, username: 'alice' };
// console.log('const object initial:', user);

// user.username = 'alice_updated';
// console.log('const object mutated:', user);

// // Uncommenting the next line will throw an error because reassignment is not allowed
// // user = { id: 2, username: 'bob' }; */

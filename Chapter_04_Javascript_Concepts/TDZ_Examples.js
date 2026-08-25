/*
// Temporal Dead Zone (TDZ) Examples for var, let, and const

// ===== 1. var: NO Temporal Dead Zone =====
console.log('===== var: NO TDZ =====');

// var is hoisted to the top and initialized with undefined
console.log('x before declaration:', x); // Output: undefined (no error!)
var x = 5;
console.log('x after declaration:', x); // Output: 5

// ===== 2. let: HAS Temporal Dead Zone =====
console.log('\n===== let: HAS TDZ =====');

try {
  console.log('y before declaration:', y); // ReferenceError: Cannot access 'y' before initialization
} catch (error) {
  console.log('Error caught:', error.message);
}

let y = 10;
console.log('y after declaration:', y); // Output: 10

// ===== 3. const: HAS Temporal Dead Zone =====
console.log('\n===== const: HAS TDZ =====');

try {
  console.log('z before declaration:', z); // ReferenceError: Cannot access 'z' before initialization
} catch (error) {
  console.log('Error caught:', error.message);
}

const z = 15;
console.log('z after declaration:', z); // Output: 15

// ===== 4. Block Scope and TDZ with let =====
console.log('\n===== Block Scope with let =====');
let outer = 'outside';
console.log('outer:', outer); // Output: outside
{
  // TDZ starts here for 'outer'
  try {
    console.log('outer in block (in TDZ):', outer);
  } catch (error) {
    console.log('Error caught:', error.message); // ReferenceError: Cannot access 'outer' before initialization
  }
  
  let outer = 'inside'; // TDZ ends here
  console.log('outer after redeclaration:', outer); // Output: inside
}

console.log('outer after block:', outer); // Output: outside

// ===== 5. Function Scope and TDZ with const =====
console.log('\n===== Function Scope with const =====');

function testTDZ() {
  try {
    console.log('msg before declaration:', msg); // ReferenceError: Cannot access 'msg' before initialization
  } catch (error) {
    console.log('Error caught:', error.message);
  }
  
  const msg = 'Hello from function';
  console.log('msg after declaration:', msg); // Output: Hello from function
}

testTDZ();

// ===== 6. Loop and TDZ with let =====
console.log('\n===== Loop Scope with let =====');

for (let i = 0; i < 3; i++) {
  console.log('Loop iteration i:', i);
}

try {
  console.log('i outside loop:', i); // ReferenceError: i is not defined
} catch (error) {
  console.log('Error caught:', error.message);
}

// ===== 7. var in loop - No TDZ =====
console.log('\n===== Loop Scope with var =====');

for (var j = 0; j < 3; j++) {
  console.log('Loop iteration j:', j);
}

console.log('j outside loop:', j); // Output: 3 (var is function-scoped, not block-scoped)

*/





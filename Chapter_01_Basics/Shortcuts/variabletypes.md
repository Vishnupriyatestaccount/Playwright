# JavaScript Variable Types: var, let, const

## `var`
- Function-scoped or globally scoped when declared outside a function.
- Can be redeclared and updated.
- Hoisted with an initial value of `undefined`.

Example:
```js
var x = 10;
console.log(x); // 10

var x = 20; // redeclaration allowed
console.log(x); // 20

function exampleVar() {
  if (true) {
    var y = 30;
  }
  console.log(y); // 30  (accessible outside block)
}
exampleVar();
```

## `let`
- Block-scoped.
- Can be updated but not redeclared in the same scope.
- Hoisted but not initialized until the declaration is evaluated (temporal dead zone).

Example:
```js
let a = 5;
a = 15; // update allowed
console.log(a); // 15

if (true) {
  let b = 25;
  console.log(b); // 25
}
// console.log(b); // ReferenceError: b is not defined

let c = 10;
// let c = 20; // SyntaxError: Identifier 'c' has already been declared
```

## `const`
- Block-scoped.
- Must be initialized at declaration.
- Cannot be reassigned.
- For objects and arrays, the binding is constant but the contents can still change.

Example:
```js
const pi = 3.14;
console.log(pi); // 3.14

// pi = 3.14159; // TypeError: Assignment to constant variable.

const obj = { name: 'Alice' };
obj.name = 'Bob'; // allowed, object contents change
console.log(obj.name); // Bob

const arr = [1, 2, 3];
arr.push(4); // allowed
console.log(arr); // [1, 2, 3, 4]

// obj = { name: 'Charlie' }; // TypeError: Assignment to constant variable.
```

## Summary
- Use `var` for legacy code or when function scope is desired.
- Use `let` for variables that need to change.
- Use `const` for values that should not be reassigned.
